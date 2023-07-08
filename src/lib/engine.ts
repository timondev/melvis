import {
  Engine,
  HemisphericLight,
  Mesh,
  MeshBuilder,
  Scene,
  SceneLoader,
  StandardMaterial,
  Vector3,
  WebXRDefaultExperience,
  WebXRState,
} from "@babylonjs/core";
import type { MelvisEngine } from "$lib/interfaces/engine";
import { enableControllerPointerSelection } from "$lib/features/webxr";
import type { Config } from "$lib/interfaces/config";
import { speak } from "$lib/features/speech";
import { enableGamePad, updateGamepad } from "$lib/features/gamepad";
import { Language } from "./enums/language";
import { roundTwoDecimals } from "./utils";

export const createEngine = async (
  canvas: OffscreenCanvas | HTMLCanvasElement,
  config: Config
): Promise<MelvisEngine> => {
  const engine = new Engine(canvas, true);
  const scene = new Scene(engine);

  const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
  light.intensity = 0.7;

  const objects = await (await fetch('/objects.json')).json();

  for (const objectId in objects) {
    const { position, size, description } = objects[objectId]!;

    const objectMaterial = new StandardMaterial(
      `object_${objectId}_texture`,
      scene
    );
    objectMaterial.alpha = 0.6;

    const object = MeshBuilder.CreateSphere(
      objectId,
      { segments: 32, diameterX: size[0], diameterY: size[1], diameterZ: size[2] },
      scene
    );
    object.position = new Vector3(position[0], position[1], position[2]);
    object.material = objectMaterial;
    object.accessibilityTag = {
      description: description[config.language],
    };
  }

  const result = await SceneLoader.ImportMeshAsync(
    "",
    "/models/",
    "skybox_fantasy_village.glb",
    scene
  );
  const skybox = result.meshes[1];
  skybox.visibility = 0;

  const pointMesh = MeshBuilder.CreateSphere(
    "hitpoint",
    { diameter: 2, segments: 32 },
    scene
  );
  pointMesh.visibility = 0;

  scene.createDefaultEnvironment({
    createGround: false,
    createSkybox: false,
  });

  const webxr = await WebXRDefaultExperience.CreateAsync(scene, {
    disableDefaultUI: true,
  });

  let lastHitPoint: Vector3;
  let lastMeshName: string;
  enableControllerPointerSelection(
    webxr,
    scene,
    (mesh: Mesh, hitPoint: Vector3) => {
      pointMesh.visibility = 1;

      const cameraPosition = webxr.baseExperience.camera.position;
      pointMesh.position = cameraPosition.add(hitPoint.scale(0.05));

      if (mesh.name in objects) {
        if (mesh.name != lastMeshName) {
          speak(objects[mesh.name].description[config.language], config);
        }

        lastMeshName = mesh.name;
      }

      lastHitPoint = hitPoint;
    }
  );

  enableGamePad(async (button) => {
    console.log("BUTTON PRESSED:", button);

    if (button == "cross") {
      const baseExperience = webxr.baseExperience;

      if (baseExperience.state === WebXRState.NOT_IN_XR) {
        await baseExperience.enterXRAsync(
          config.sessionMode,
          config.referenceSpaceType
        );
        baseExperience.camera.setTransformationFromNonVRCamera();

        speak(
          config.language == Language.DE
            ? `Willkommen in der kleinen Stadt des Märchens. Schauen Sie sich um genießen Sie die Aussicht.`
            : `Welcome to the small city of fairytale. Look around and enjoy the view.`,
          config,
          true
        );
      }

      return;
    }

    if (button == "square") {
      const baseExperience = webxr.baseExperience;

      if (baseExperience.state === WebXRState.IN_XR) {
        await baseExperience.exitXRAsync();
        speak(
          config.language == Language.DE
            ? `Vielen Dank für Ihre Teilnahme.`
            : `Thank you for your participation.`,
          config,
          true
        );
      }

      return;
    }

    if (button == "triangle") {
      console.log(
        `object: {\n  position: new Vector3(${roundTwoDecimals(lastHitPoint.x)}, ${roundTwoDecimals(lastHitPoint.y)}, ${roundTwoDecimals(lastHitPoint.z)}),\n  size: new Vector3(50.0, 50.0, 50.0),\n  description: {\n    de: '',\n    en: ''\n  }\n}`
      );
    }

    if (button == "l1") {
      skybox.visibility = 0;
      return;
    }

    if (button == "r1") {
      skybox.visibility = 1;
      return;
    }

    if (button == "leftpad-left") {
      config.language = Language.DE;
      speak("Sprache auf Deutsch gesetzt.", config, true);
      return;
    }

    if (button == "leftpad-right") {
      config.language = Language.EN;
      speak("Language set to english.", config, true);
      return;
    }

    if (button == "leftpad-up") {
      config.textSpeed = roundTwoDecimals(config.textSpeed + 0.1);
      speak(
        config.language == Language.DE
          ? `Sprachgeschwindigkeit auf ${config.textSpeed} gesetzt.`
          : `Language speed set to ${config.textSpeed}`,
        config,
        true
      );
      return;
    }

    if (button == "leftpad-down") {
      config.textSpeed = roundTwoDecimals(config.textSpeed - 0.1 + Number.EPSILON);
      speak(
        config.language == Language.DE
          ? `Sprachgeschwindigkeit auf ${config.textSpeed} gesetzt.`
          : `Language speed set to ${config.textSpeed}.`,
        config,
        true
      );
      return;
    }

    if (button == 'select') {
      location.reload();
      return;
    }

    if (button == 'start') {
      config.language = Language.EN;
      config.textSpeed = 1.0;
      skybox.visibility = 0;

      speak('Settings resetted.', config);
    }
  });

  const renderLoop = () => {
    scene.render();

    updateGamepad();
  };

  engine.runRenderLoop(renderLoop);

  return {
    engine,
    webxr,
    scene,
  };
};
