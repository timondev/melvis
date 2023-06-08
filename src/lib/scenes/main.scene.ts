import { HemisphericLight, type Engine, MeshBuilder, Scene, Vector3 } from '@babylonjs/core';

export const createMainScene = (engine: Engine) => {
	const scene = new Scene(engine);

	const light = new HemisphericLight('light', new Vector3(0, 1, 0), scene);
	// Dim the light a small amount - 0 to 1
	light.intensity = 0.7;

	const sphere = MeshBuilder.CreateSphere('sphere', { diameter: 2, segments: 32 }, scene);
	// Move the sphere upward 1/2 its height
	sphere.position.y = 1;
	// Built-in 'ground' shape.
	MeshBuilder.CreateGround('ground', { width: 6, height: 6 }, scene);

	return scene;
};
