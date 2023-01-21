<script lang="ts">
	import type { ICardSectionFields } from '$lib/server/types';
	import Card from '../components/card.svelte';

	export let pageContent: ICardSectionFields;
	const { fields: content } = pageContent;

	const cardsCheck = content?.cards && content?.cards.length > 0;
	const blogCards = cardsCheck && content.cards.map((item) => item.fields);
</script>

<section
	class="flex justify-center  mt-[30px] mt-[50px] md:mt-[80px] lg:mt-[100px] mb-[40px] sm:mb-[110px] w-full"
	id="blogs"
>
	<div class="flex flex-col items-center w-[90%] lg:w-[80%]">
		<p
			class="text-4xl sm:text-5xl md:text-6xl font-heading text-gray uppercase text-center md:text-left"
		>
			{content?.title}
		</p>
		<p
			class="text-base md:text-xl font-[300] mb-6 md:mb-8 text-left text-center md:text-left opacity-70"
		>
			{content?.description}
		</p>
		<div class="flex flex-col items-center justify-center mt-3 sm:mt-5 w-[90%]">
			{#if blogCards}
				{#each blogCards as blogCard}
					<Card
						cardImg={blogCard?.image?.fields?.file?.url || ''}
						title={blogCard?.title}
						description={blogCard?.description}
						stack={blogCard?.subTitle}
						link={blogCard?.link}
						variant="horizontal"
					/>
				{/each}
			{/if}

			<div class="flex w-full justify-center sm:justify-start">
				<a href="https://elshaday.medium.com/" target="_blank" rel="noopener noreferrer"
					><button class="bg-primary font-heading text-xl text-white uppercase h-9 w-28">
						View all
					</button></a
				>
			</div>
		</div>
	</div>
</section>
