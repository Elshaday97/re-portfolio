<script lang="ts">
	import type { IAboutSectionFields } from '$lib/server/types';
	import Socials from './socials.svelte';

	const DownloadIcon = '/icons/link.svg';

	export let pageContent: IAboutSectionFields;
	const { fields: content } = pageContent;
	const SubjectImg = content?.mainImage.fields.file.url || '';
	const Subject1Img = content?.secondImage.fields.file.url || '';
</script>

<div
	class="absolute w-3/4 sm:w-[55%] h-[60%] sm:h-[60vh] top-0 right-0 bg-[#177E89] blurred -z-10"
/>

<section class="flex justify-center  w-full" id="about">
	<div class="flex flex-col items-center justify-between w-[95%] sm:w-11/12">
		<!-- First section  -->
		<div
			class="flex flex-col sm:flex-row justify-center items-center sm:items-end w-full mt-3 sm:mt-14"
		>
			<img
				alt="subject"
				class="w-[150px] sm:w-[30%] md:[33%] lg:w-[26%] h-9/12 mr-0 sm:mr-10"
				src={SubjectImg}
			/>

			<div class="flex flex-col items-center sm:items-start w-[95%] sm:w-3/6 mt-4 sm:mt-8 sm:mt-0">
				<p
					class="text-sm sm:text-base lg:text-xl text-white font-[500] sm:font-[600] uppercase text-center sm:text-left"
				>
					{content?.introduction || ''}
				</p>
				<p
					class="text-6xl sm:text-6xl md:text-7xl lg:text-8xl font-heading hollow uppercase text-center sm:text-left"
				>
					{content?.hollowTitle || ''}
				</p>
				<p
					class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading text-white uppercase text-center sm:text-left"
				>
					{content?.normalTitle || ''}
				</p>
				<p
					class="text-base md:text-xl font-[300] mt-0 sm:mt-3 mb-6 md:mb-8 text-center sm:text-left"
				>
					{content?.mainDescription || ''}
				</p>

				{#if content?.socialMediaLinks}
					<Socials socialMediaLinks={content?.socialMediaLinks} />
				{/if}
			</div>
		</div>

		<!-- Second section  -->
		<div
			class="relative flex justify-between items-baseline sm:items-end w-[90%] sm:w-[95%] md:w-[85%] lg:w-[80%] mt-8 md:mt-0 "
		>
			<div class="flex flex-col items-start w-full md:w-[65%] mt-4 md:mt-14">
				<p class="text-4xl sm:text-5xl font-heading text-gray uppercase text-left">
					{content?.secondTitle || ''}
				</p>
				<p class="text-base md:text-xl font-[300] mb-3 md:mb-4 text-left">
					{content?.secondSubtitle || ''}
				</p>
				<p class="text-base mb-6 md:mb-8 text-left">
					{content?.secondDescription || ''}
				</p>
				<a href="files/CV.pdf" target="_blank" rel="noopener noreferrer"
					><button
						class="flex items-center justify-center bg-primary font-heading text-xl text-white uppercase h-10 w-28"
					>
						<img class="mr-2" alt="icon" src={DownloadIcon} />
						{content?.buttonLabel || ''}
					</button></a
				>
			</div>

			<img
				alt="subject"
				class="hidden md:flex absolute w-[200px] md:right-0 lg:right-5 top-[130px] mr-[10px]"
				src={Subject1Img}
			/>
		</div>
	</div>
</section>
