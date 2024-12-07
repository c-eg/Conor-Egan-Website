<script>
	import Project from './Project.svelte';
	import '../../lib/services/github/types.js';

	const { data } = $props();

	/** @type {Repository[]} */
	const repositories = data.repositories;

	/** @type {string[]} */
	const repositoryLanguages = [...new Set(repositories.flatMap(repo => repo.languages))];

	/** @type {string} */
	let languageFilter = $state('all');

	/** @type {Repository[]} */
	const filteredRepositories = $derived(
		languageFilter === 'all'
			? repositories
			: repositories.filter(repo => repo.languages.includes(languageFilter)));

	/** @type {SortOption[]} */
	const sortOptions = [
		{ label: 'Stars Ascending', value: 'starsAsc' },
		{ label: 'Stars Descending', value: 'starsDesc' },
		{ label: 'Title Ascending', value: 'titleAsc' },
		{ label: 'Title Descending', value: 'titleDesc' }
	];

	/** @type {string} */
	let selectedSort = $state(sortOptions[1].value);

	/** @type {Repository[]} */
	const sortedAndFilteredRepositories = $derived([...filteredRepositories].sort((a, b) => {
		switch (selectedSort) {
			case 'titleAsc':
				return a.title.localeCompare(b.title);
			case 'titleDesc':
				return b.title.localeCompare(a.title);
			case 'starsAsc':
				return a.stars - b.stars;
			case 'starsDesc':
				return b.stars - a.stars;
			default:
				return 0;
		}
	}));
</script>

<svelte:head>
	<title>Projects | Conor Egan</title>
	<meta content="Conor Egan's software projects." name="description" />
</svelte:head>

<div class="flex flex-col justify-center items-center">
	<h1 class="text-3xl md:text-4xl lg:text-5xl text-[var(--colour-primary)] drop-shadow-2xl font-medium text-center">
		Here are some of my <span class="text-[var(--colour-secondary)]">projects</span>
	</h1>

	{#if repositories.length > 0}
		<div class="flex flex-col justify-center items-center mt-16 max-w-3xl lg:max-w-4xl w-full gap-6">
			<div class="flex flex-row flex-wrap gap-6">
				<select bind:value={selectedSort}
								class="p-2 border border-opacity-20 border-white rounded-lg hover:border-opacity-30
											 focus:outline-none hover:bg-slate-500 hover:bg-opacity-5 bg-transparent text-white">
					{#each sortOptions as option}
						<option value={option.value} class="text-black">{option.label}</option>
					{/each}
				</select>

				<select bind:value={languageFilter}
								class="p-2 border border-opacity-20 border-white rounded-lg hover:border-opacity-30
											 focus:outline-none hover:bg-slate-500 hover:bg-opacity-5 bg-transparent text-white">
					<option value={"all"} class="text-black">All Languages</option>
					{#each repositoryLanguages as lang}
						<option class="text-black">{lang}</option>
					{/each}
				</select>
			</div>

			<div class="flex flex-col gap-6 w-full">
				{#each sortedAndFilteredRepositories as repo}
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
