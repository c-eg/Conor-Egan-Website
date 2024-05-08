<script>
	export let link;
	export let title;
	export let description;
	export let stars;
</script>

<a href={link} target="_blank" class="flex flex-col gap-2 text-[var(--colour-primary)] justify-center items-start">
	<p class="text-2xl text-[var(--colour-secondary)] font-medium">{title}</p>
	<p class="text-xl font-normal">{description}</p>
	<div class="flex gap-2">
        <enhanced:img src="$lib/assets/star.svg" alt="Star" />
        <p class="text-xl font-medium">{stars}</p>
    </div>
</a>
