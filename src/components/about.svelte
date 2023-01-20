<script>
	import Socials from './socials.svelte';

	const SubjectImg = '/images/subject.webp';
	const SubjectIcon = '/icons/subject2.svg';
	const DownloadIcon = '/icons/link.svg';
</script>

<div
	class="absolute w-3/4 sm:w-[55%] h-[80%] sm:h-[60vh] top-0 right-0 bg-[#177E89] blurred -z-10"
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
					Hello, I'm Elshaday
				</p>
				<p
					class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading hollow uppercase text-center sm:text-left"
				>
					Web Developer,
				</p>
				<p
					class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading text-white uppercase text-center sm:text-left"
				>
					UI/UX Designer, Creative Writer
				</p>
				<p
					class="text-sm sm:text-base md:text-xl font-[200] mt-0 sm:mt-3 mb-6 md:mb-8 text-center sm:text-left"
				>
					A multi-versed software developer excited to embark on new projects!
				</p>

				<Socials />
			</div>
		</div>

		<!-- Second section  -->
		<div
			class="relative flex justify-between items-baseline sm:items-end w-[90%] sm:w-[95%] md:w-[85%] lg:w-[80%] mt-8 md:mt-0 "
		>
			<div class="flex flex-col items-start w-full md:w-[65%] mt-4 md:mt-14">
				<p class="text-4xl sm:text-5xl font-heading text-white sm:text-gray uppercase text-left">
					About Me
				</p>
				<p class="text-base md:text-xl font-[200] mb-3 md:mb-4 text-left">
					A little bit on my background
				</p>
				<p class="text-base mb-6 md:mb-8 text-left font-[300]">
					I'm a Software Engineering graduate focusing on web and mobile app development. I
					specialize in technologies such as React and React Native, and love to design high quality
					products with keen attention to user experience.
				</p>
				<a href="files/CV.pdf" target="_blank" rel="noopener noreferrer"
					><button
						class="flex items-center justify-center bg-primary font-heading text-xl text-white uppercase h-10 w-28"
					>
						<img class="mr-2" alt="icon" src={DownloadIcon} /> Resume
					</button></a
				>
			</div>

			<img
				alt="subject"
				class="hidden md:flex absolute w-[200px] md:right-0 lg:right-5 top-[130px] mr-[10px]"
				src={SubjectIcon}
			/>
		</div>
	</div>
</section>
