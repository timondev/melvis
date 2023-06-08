import { Engine } from '@babylonjs/core';
import { WebXRDefaultExperience } from '@babylonjs/core/XR/webXRDefaultExperience';
import { createCamera } from '$lib/webxr';
import { createMainScene } from '$lib/scenes/main.scene';

import '@babylonjs/loaders/glTF';
import '@babylonjs/core/Materials/Node/Blocks';

interface MelvisEngine {
	engine: Engine;
	renderLoop: () => void;
	xr: WebXRDefaultExperience;
}

export const createEngine = async (canvas: OffscreenCanvas | HTMLCanvasElement): Promise<MelvisEngine> => {
	const engine = new Engine(canvas, true);
	const scene = createMainScene(engine);

	const camera = createCamera();
	camera.attachControl(canvas, true);

	scene.addCamera(camera);

	const xr = await WebXRDefaultExperience.CreateAsync(scene, {
		disableDefaultUI: true,
	});

	const renderLoop = () => {
		scene.render();
	};

	return {
		engine,
		renderLoop,
		xr
	};
};
