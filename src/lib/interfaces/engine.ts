import type { Engine, Scene, WebXRDefaultExperience } from "@babylonjs/core";

export interface MelvisEngine {
  engine: Engine;
  webxr: WebXRDefaultExperience;
  scene: Scene;
}