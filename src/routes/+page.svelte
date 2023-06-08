<script lang="ts">
	import Melvis from '$lib/components/melvis.svelte';
	import Description from '$lib/components/description.svelte';
	import Logo from '$lib/components/logo.svelte';
</script>

<div class="page-wrapper">
	<Logo />
	<Description />
	<Melvis />
</div>

<style>
	.page-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100vh;

		padding: 2rem;

		background-color: #e0e1dd;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
</style>
