<script>
	import Project from './Project.svelte';

	let { data } = $props();
	let repositories = data.repositories;
</script>

<svelte:head>
	<title>Projects | Conor Egan</title>
	<meta name="description" content="Conor Egan's software projects." />
</svelte:head>

<div class="flex flex-col justify-center items-center">
	<h1
		class="text-3xl md:text-4xl lg:text-5xl text-[var(--colour-primary)] drop-shadow-2xl font-medium text-center"
	>
		Here are some of my <span class="text-[var(--colour-secondary)]">projects</span>
	</h1>

	{#if repositories !== undefined && repositories.length > 0}
		<div class="flex flex-col gap-6 mt-16 max-w-3xl lg:max-w-4xl w-full">
			{#each repositories as repo}
				<Project
					link={repo.link}
					title={repo.title}
					description={repo.description}
					stars={repo.stars}
					languages={repo.languages}
				/>
			{/each}
		</div>
	{:else}
		<p class="text-xl text-[var(--colour-primary)] drop-shadow-2xl font-normal mt-20">
			There was an error with the GitHub API.
		</p>
	{/if}
</div>
