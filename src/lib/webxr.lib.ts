import { WebXRSessionManager } from "@babylonjs/core"

export const isVRSupported = async (): Promise<boolean> => {
  return await WebXRSessionManager.IsSessionSupportedAsync('immersive-vr');
}

export const isInlineSupported = async (): Promise<boolean> => {
  return await WebXRSessionManager.IsSessionSupportedAsync('inline');
}