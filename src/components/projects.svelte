<script lang="ts">
	import type { ICardSectionFields } from '$lib/server/types';
	import Card from '../components/card.svelte';
	const ArrowIcon = '/icons/arrow-colored.svg';

	export let pageContent: ICardSectionFields;
	const content = pageContent?.fields;

	const cardsCheck = content?.cards && content?.cards.length > 0;
	const projectCards = cardsCheck && content.cards.map((item) => item.fields);
</script>

<section
	class="flex justify-center mt-[30px] mt-[50px] md:mt-[80px] lg:mt-[100px] w-full"
	id="projects"
>
	<div class="flex flex-col items-center w-[90%]">
		<p
			class="text-4xl sm:text-5xl md:text-6xl font-heading text-gray uppercase text-center md:text-right"
		>
			{content?.title}
		</p>
		<p class="text-base md:text-xl font-[300] mb-6 md:mb-8 text-center md:text-right opacity-70">
			{content?.description}
		</p>

		<div class="relative flex items-center justify-center w-full h-full">
			<div
				id="cardWrapper"
				class="flex flex-col md:flex-row items-center justify-center  mt-3 sm:mt-5 w-full md:overflow-x-auto py-2 hideScrollBar"
			>
				{#if projectCards}
					{#each projectCards as projectCard}
						<Card
							cardImg={projectCard?.image?.fields?.file?.url || ''}
							title={projectCard?.title}
							description={projectCard?.description}
							role={projectCard?.identifier}
							stack={projectCard?.subTitle}
							link={projectCard?.link || ''}
						/>
					{/each}
				{/if}
			</div>
			<div
				class="hidden md:flex sticky bg-white flex items-center justify-center h-full min-w-[50px] right-0 z-100"
			>
				<button><img alt="arrow" class="w-[40px] h-[40px]" src={ArrowIcon} /></button>
			</div>
		</div>
	</div>
</section>
