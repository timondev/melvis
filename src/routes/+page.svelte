<script lang="ts">
  import { onMount } from "svelte";
  import { ArcRotateCamera, Engine, HemisphericLight, MeshBuilder, Scene, Vector3 } from "@babylonjs/core";
	import { isVRSupported } from "$lib/webxr.lib";

  let canvas: HTMLCanvasElement;
  let engine: Engine;

  const createEnvironment = (scene: Scene) => {
    const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
    // Dim the light a small amount - 0 to 1
    light.intensity = 0.7;
  
    const sphere = MeshBuilder.CreateSphere("sphere", {diameter: 2, segments: 32}, scene);
    // Move the sphere upward 1/2 its height
    sphere.position.y = 1;
    // Built-in 'ground' shape.
    MeshBuilder.CreateGround("ground", {width: 6, height: 6}, scene);
  }

  onMount(async () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    engine = new Engine(canvas, true);
    const scene = new Scene(engine);

    const camera = new ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 4, 3, new Vector3(0, 1, 0), scene);
    camera.setTarget(Vector3.Zero());
    camera.attachControl(canvas, true);

    createEnvironment(scene);

    if(await isVRSupported()) {
      await scene.createDefaultXRExperienceAsync();
    } else {
      console.log('VR is not supported');
    }

    engine.runRenderLoop(() => {
      scene.render();
    });

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      if(engine !== undefined) {
        engine.resize();
      }
    });
  });
</script>

<canvas bind:this={canvas}></canvas>