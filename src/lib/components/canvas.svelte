<script lang="ts">
	import { createEngine } from '$lib/engine';
	import { isVRSupported } from '$lib/webxr';
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;
	onMount(async () => {
		if (!await isVRSupported()) {
			return;
		}

		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		const { engine, renderLoop } = await createEngine(canvas);
		engine.runRenderLoop(renderLoop);

		window.addEventListener('resize', () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;

			engine.resize();
		});
	});
</script>

<canvas bind:this={canvas} />
