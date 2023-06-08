<script lang="ts">
	import { onMount } from 'svelte';
	import { createEngine } from '$lib/engine';
	import { isVRSupported } from '$lib/webxr';
	import { Engine, WebXRDefaultExperience, WebXRState } from '@babylonjs/core';
	import UAParser from 'ua-parser-js';

	enum ButtonStates {
		DISABLED = 'Experience not available',
		LOADING = 'Loading experience',
		ENTER = 'Start experience',
		ENTERING = 'Starting experience',
		EXIT = 'Stop experience',
		EXITING = 'Stopping experience'
	}

	const SupportedBrowsers = ['Chromium', 'Edge', 'Oculus Browser', 'Chrome', 'Mobile Chrome'];

	let disabled = true;
	let text = ButtonStates.LOADING;

	let engine: Engine;
	let renderLoop: () => void;
	let xr: WebXRDefaultExperience;

	const onButtonClick = async () => {
		if (xr.baseExperience.state === WebXRState.NOT_IN_XR) {
			await xr.baseExperience.enterXRAsync('immersive-vr', 'local-floor');
		} else {
			await xr.baseExperience.exitXRAsync();
		}
	};

	onMount(async () => {
		const userAgent = UAParser();

		if (!SupportedBrowsers.includes(userAgent.browser.name ?? '') || !(await isVRSupported())) {
			console.log('VR not supported');
			text = ButtonStates.DISABLED;
			return;
		}

		const canvas = document.createElement('canvas');
		// const canvas = new OffscreenCanvas(4320, 2160);

		({ engine, renderLoop, xr } = await createEngine(canvas));
		engine.runRenderLoop(renderLoop);

		xr.baseExperience.onStateChangedObservable.add((newState) => {
			switch (newState) {
				case WebXRState.ENTERING_XR:
					disabled = true;
					text = ButtonStates.ENTERING;
					break;
				case WebXRState.EXITING_XR:
					disabled = true;
					text = ButtonStates.EXITING;
					break;
				case WebXRState.IN_XR:
					disabled = false;
					text = ButtonStates.EXIT;
					break;
				case WebXRState.NOT_IN_XR:
					disabled = false;
					text = ButtonStates.ENTER;
					break;
			}
		});

		disabled = false;
		text = ButtonStates.ENTER;
	});
</script>

<!-- 
<canvas width="600" height="240" bind:this={canvas} /> -->
<button on:click={onButtonClick} {disabled}>{text}</button>
