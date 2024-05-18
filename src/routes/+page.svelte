<svelte:head>
	<title>Home | Conor Egan</title>
	<meta name="description" content="Portfolio website for Conor Egan, a Software Engineer." />
</svelte:head>

<div class="flex flex-col justify-center items-center gap-[3rem]">
	<h1 class="text-8xl text-[var(--colour-primary)] drop-shadow-2xl font-medium text-center">
		I'm <span class="text-[var(--colour-secondary)]">Conor Egan</span>
	</h1>
	<h2
		class="text-[2.5rem] leading-[3rem] text-[var(--colour-primary)] drop-shadow-2xl font-normal text-center max-w-xl"
	>
		a Software Engineer, passionate about crafting digital solutions.
	</h2>

	<div class="flex flex-row justify-center items-center gap-10 mt-16">
		<div class="border-[3px] border-[var(--colour-secondary)] rounded-full">
			<enhanced:img src="$lib/assets/profile-picture.jpg?w=200" alt="Conor" class="rounded-full m-2" />
		</div>
		<div class="flex flex-col gap-5">
			<a href="https://github.com/c-eg" target="_blank" class="flex justify-start items-center gap-3">
				<enhanced:img src="$lib/assets/github-mark.svg" alt="GitHub" />
				<p class="text-xl text-[var(--colour-primary)] drop-shadow-2xl font-normal">GitHub</p>
			</a>
			<a href="https://www.linkedin.com/in/c-eg/" target="_blank" class="flex justify-start items-center gap-3">
				<enhanced:img src="$lib/assets/iconmonstr-linkedin-3.svg" alt="Linked In" />
				<p class="text-xl text-[var(--colour-primary)] drop-shadow-2xl font-normal">LinkedIn</p>
			</a>
		</div>
	</div>
</div>
