import { Mesh, PointerEventTypes, Vector3, type Scene, type WebXRDefaultExperience } from "@babylonjs/core";

export const enableControllerPointerSelection = (webxr: WebXRDefaultExperience, scene: Scene, callback: (pickedMesh: Mesh, pickedPoint: Vector3) => void) => {
  const baseExperience = webxr.baseExperience;
  const features = baseExperience.featuresManager.getEnabledFeatures();

  if('xr-controller-pointer-selection' in features) {
		const controllerPointerSelection = baseExperience.featuresManager.getEnabledFeature('xr-controller-pointer-selection');
		controllerPointerSelection.dispose();
	}

  baseExperience.featuresManager.enableFeature('xr-controller-pointer-selection', undefined, {
		disablePointerUpOnTouchOut: true,
		disableScenePointerVectorUpdate: true,
		forzeGazeMode: true,
		gazeCamera: baseExperience.camera,
		xrInput: webxr.input,
		timeToSelect: 100,
	});

	scene.onPointerObservable.add((pointerInfo) => {
		switch (pointerInfo.type) {
			case PointerEventTypes.POINTERDOWN:
				if (pointerInfo.pickInfo && pointerInfo.pickInfo.hit && pointerInfo.pickInfo.pickedMesh && pointerInfo.pickInfo.pickedPoint) {
					const pickedMesh = pointerInfo.pickInfo.pickedMesh as Mesh;
					const pickedPoint = pointerInfo.pickInfo.pickedPoint;

					if(pickedMesh.name === 'hitpoint') return;

					callback(pickedMesh, pickedPoint);
				}
				break;
		}
	});
}