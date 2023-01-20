<script>
	const SvelteIcon = '/icons/svelte.svg';
	const TSIcon = '/icons/ts.svg';
	const ReactIcon = '/icons/react.svg';
	const NextJSIcon = '/icons/next.svg';
	const ReduxIcon = '/icons/redux.svg';
	const NodeIcon = '/icons/node.svg';
	const MongoIcon = '/icons/mongo.svg';
	const DockerIcon = '/icons/docker.svg';

	const techStacks = [
		TSIcon,
		ReactIcon,
		SvelteIcon,
		NextJSIcon,
		ReduxIcon,
		NodeIcon,
		MongoIcon,
		DockerIcon
	];
</script>

<section
	class="flex bg-primary items-center justify-center h-auto py-5 sm:py-0 sm:h-40 mt-[50px] md:mt-[80px] lg:mt-[100px] w-full"
	id="specialities"
>
	<div class="flex flex-col sm:flex-row items-center justify-between  w-[90%] h-[95%]">
		<div class="flex flex-col items-center sm:items-start w-[90%] sm:w-[50%]">
			<p
				class="text-4xl sm:text-5xl md:text-6xl font-heading text-white uppercase text-center sm:text-left"
			>
				Specialities
			</p>
			<p
				class="text-base md:text-xl font-[300] mb-3 md:mb-0 text-left text-white opacity-75 text-center sm:text-left"
			>
				Technologies I work with on a daily basis
			</p>
		</div>

		<div class="flex justify-between w-full sm:w-[70%] overflow-x-auto hideScrollBar">
			{#each techStacks as techStack}
				<img
					alt="tech"
					class="h-[40px] w-[40px] md:h-[48px] md:w-[48px] lg:h-auto lg:w-auto mr-3"
					src={techStack}
				/>
			{/each}
		</div>
	</div>
</section>
