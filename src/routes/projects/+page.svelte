<script>
	import Project from './Project.svelte';
	import '../../lib/services/github/types.js';

	let { data } = $props();

	/** @type {Repository[]} */
	let repositories = data.repositories;

	/** @type {string[]} */
	let repositoryLanguages = [...new Set(repositories.flatMap(repo => repo.languages))];

	/** @type {string} */
	let languageFilter = $state('');

	// todo: make this a function to filter/sort
	// todo: add sorting functionality
	let filteredRepositories = $derived(languageFilter === '' ? repositories : repositories.filter(repo => repo.languages.includes(languageFilter)));
</script>

<svelte:head>
	<title>Projects | Conor Egan</title>
	<meta content="Conor Egan's software projects." name="description" />
</svelte:head>

<div class="flex flex-col justify-center items-center">
	<h1
		class="text-3xl md:text-4xl lg:text-5xl text-[var(--colour-primary)] drop-shadow-2xl font-medium text-center"
	>
		Here are some of my <span class="text-[var(--colour-secondary)]">projects</span>
	</h1>

	{#if repositories.length > 0}
		<div class="flex flex-col justify-center items-center mt-16 max-w-3xl lg:max-w-4xl w-full">
			<!-- todo: style the select and options to look nice on mobile -->
			<select bind:value={languageFilter}
							class="mb-4 p-2 border border-opacity-20 border-white rounded-lg hover:border-opacity-30 focus:outline-none hover:bg-slate-500 hover:bg-opacity-5 bg-transparent text-white">
				<option value={""} class="text-black">All Languages</option>
				{#each repositoryLanguages as lang}
					<option class="text-black">{lang}</option>
				{/each}
			</select>

			<div class="flex flex-col gap-6 w-full">
				{#each filteredRepositories as repo}
					<Project
						link={repo.link}
						title={repo.title}
						description={repo.description}
						stars={repo.stars}
						languages={repo.languages}
					/>
				{/each}
			</div>
		</div>
	{:else}
		<p class="text-xl text-[var(--colour-primary)] drop-shadow-2xl font-normal mt-20">
			There are currently no projects.
		</p>
	{/if}
</div>
