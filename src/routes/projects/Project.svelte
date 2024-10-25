<script>
	let {
		link,
		title,
		description,
		stars,
		languages
	} = $props();
</script>

<a
	href={link}
	target="_blank"
	class="flex flex-col gap-2 lg:gap-3 text-[var(--colour-primary)] justify-center items-start
		   p-5 border border-opacity-20 border-white rounded-lg hover:border-opacity-30
		 hover:bg-slate-500 hover:bg-opacity-5"
>
	<p class="text-2xl lg:text-3xl text-[var(--colour-secondary)] font-medium">{title}</p>
	<p class="text-xl lg:text-2xl font-normal">{description}</p>

	<div class="flex justify-center items-center gap-2">
		<enhanced:img src="$lib/assets/star.svg" alt="Star" />
		<p class="text-xl lg:text-2xl font-normal">{stars}</p>
	</div>

	{#if languages !== undefined && languages.length > 0}
		<div class="flex flex-wrap gap-2">
			{#each languages as lang}
				<p
					class="text-md lg:text-lg font-medium bg-yellow-600 bg-opacity-20 rounded-full px-4 py-1 text-[var(--colour-secondary)]"
				>
					{lang}
				</p>
			{/each}
		</div>
	{/if}
</a>
