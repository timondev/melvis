import { Engine } from '@babylonjs/core';
import { createCamera } from '$lib/webxr';
import { createMainScene } from '$lib/scenes/main.scene';

interface MelvisEngine {
	engine: Engine;
	renderLoop: () => void;
}

export const createEngine = async (canvas: HTMLCanvasElement): Promise<MelvisEngine> => {
	const engine = new Engine(canvas, true);
	const scene = createMainScene(engine);

	const camera = createCamera();
	camera.attachControl(canvas, true);

	scene.addCamera(camera);

	await scene.createDefaultXRExperienceAsync();

	const renderLoop = () => {
		scene.render();
	};

	return {
		engine,
		renderLoop
	};
};
