<script>
	export let link;
	export let title;
	export let description;
	export let stars;
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
</a>
