<script>
	import Card from '../components/card.svelte';

	const Hemisphere = '/images/hemisphere.webp';
	const YegnaHome = '/images/yegnahome.webp';
	const LinkBuilders = '/images/linkbldrs.webp';
	const GeoEvent = '/images/geoEvent.webp';
	const Escaply = '/images/escaply.webp';
	const ArrowIcon = '/icons/arrow-colored.svg';
</script>

<section
	class="flex justify-center mt-[30px] mt-[50px] md:mt-[80px] lg:mt-[100px] w-full"
	id="projects"
>
	<div class="flex flex-col items:center md:items-end w-[90%]">
		<p
			class="text-4xl sm:text-5xl md:text-6xl font-heading text-gray uppercase text-center md:text-right"
		>
			Projects
		</p>
		<p class="text-base md:text-xl font-[300] mb-6 md:mb-8 text-center md:text-right opacity-70">
			Team work always results in fruitful products
		</p>

		<div class="relative flex items-center justify-center w-full h-full">
			<div
				id="cardWrapper"
				class="flex flex-col md:flex-row items-center justify-center md:justify-between mt-3 sm:mt-5 w-full md:overflow-x-auto py-2 hideScrollBar"
			>
				<Card
					cardImg={YegnaHome}
					title="YegnaHome"
					description="A web and mobile marketplace application used for booking vacation and apartment rentals in Ethiopia."
					role="Frontend Developer, Mobile App Developer"
					stack="React, Redux, React Native"
					link="https://yegnahome.com"
				/>
				<Card
					cardImg={Escaply}
					title="Escaply"
					description="A digital adaptation of Escape The Room game that allows teachers to create interactive quizes (EduTech)."
					role="Frontend Developer, Mobile App Developer"
					stack="React, Redux, React Native, NodeJs"
					link="https://play.escaply.com"
				/>
				<Card
					cardImg={Hemisphere}
					title="Hemisphere"
					description="A web application used for collecting, managing and analyzing surveys."
					role="Full Stack Developer"
					stack="React, Redux, Django"
					link="https://hemisphere-dashboard.com"
				/>
				<Card
					cardImg={LinkBuilders}
					title="Link Builders"
					description="Used by SEO professionals for creating, selling, buying, analyzing and managing their backlinks."
					role="Frontend Developer"
					stack="React, Redux, Styled System"
					link="https://app.link.builders/"
				/>
				<Card
					cardImg={GeoEvent}
					title="Geo Event"
					description="An IOS app used create and play team building games by placing various interactive questions in different locations."
					role="Mobile App Developer"
					stack="Swift"
					link="https://geoevent.se/"
				/>
			</div>
			<div
				class="hidden md:flex sticky bg-white flex items-center justify-center h-full min-w-[50px] right-0 z-100"
			>
				<button><img alt="arrow" class="w-[40px] h-[40px]" src={ArrowIcon} /></button>
			</div>
		</div>
	</div>
</section>
