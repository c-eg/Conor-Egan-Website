<script>
	import Nav from '$lib/Nav.svelte';
	import '../app.css';
	import '@fontsource/roboto/400.css';
	import '@fontsource/roboto/500.css';
</script>

<div class="p-5">
	<header class="mt-5">
		<Nav />
	</header>
	<main class="mt-16 lg:mt-32">
		<slot />
	</main>
</div>
