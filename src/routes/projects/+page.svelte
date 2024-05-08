<script>
	import Project from '$lib/Project.svelte';
</script>

<svelte:head>
	<title>Projects | Conor Egan</title>
	<meta name="description" content="Conor Egan's software projects." />
</svelte:head>

<div class="flex flex-col justify-center items-center">
	<h1
		class="text-[2.5rem] leading-[3rem] text-[var(--colour-primary)] drop-shadow-2xl font-medium"
	>
		Here are some of my <span class="text-[var(--colour-secondary)]">projects</span>
	</h1>
	
	<div class="flex flex-col gap-[2.5rem] mt-16 max-w-4xl w-full">
		<Project
			link={"https://github.com/c-eg/themoviedbapi"}
			title={'TheMovieDB API'}
			description={'A Java wrapper around the JSON API provided by TheMovieDB.org'}
			stars={258}
		/>
		<Project
			link={"https://github.com/c-eg/themoviedbapi"}
			title={'Show Renamer'}
			description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"}
			stars={258}
		/>
	</div>
</div>
