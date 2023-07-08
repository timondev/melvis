<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { Engine, Scene, WebXRDefaultExperience, WebXRState } from '@babylonjs/core';
  import { onResize } from "$lib/features/resize";
  import { config } from "$lib/config";
  import { createEngine } from "$lib/engine";
  
  import '@babylonjs/loaders/glTF';
  import '@babylonjs/core/Materials/Node/Blocks';

  let button: HTMLButtonElement;
  let container: HTMLDivElement;

  let canvas = document.createElement('canvas');
  let engine: Engine;
  let webxr: WebXRDefaultExperience;
  let scene: Scene;

  onMount(async () => {
    window.addEventListener("resize", () => onResize(container));
    onResize(container);

    ({ engine, webxr, scene } = await createEngine(canvas, config));
  });

  onDestroy(() => {
    window.removeEventListener("resize", () => onResize(container));
  });
</script>

<div class="container" bind:this={container}>
  <img src="/logo.svg" alt="Melvis" width="190" height="48" />
</div>
