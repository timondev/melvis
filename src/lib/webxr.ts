import { DeviceOrientationCamera, Vector3, WebXRSessionManager } from '@babylonjs/core';

export const isVRSupported = async (): Promise<boolean> => {
	return await WebXRSessionManager.IsSessionSupportedAsync('immersive-vr');
};

export const isInlineSupported = async (): Promise<boolean> => {
	return await WebXRSessionManager.IsSessionSupportedAsync('inline');
};

export const createCamera = (): DeviceOrientationCamera => {
	const camera = new DeviceOrientationCamera(
		'device_orientation_camera',
		new Vector3(0, 5, -1)
	);
	camera.setTarget(Vector3.Zero());

	return camera;
};
