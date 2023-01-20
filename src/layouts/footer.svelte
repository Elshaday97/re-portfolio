<script>
	import Socials from '../components/socials.svelte';
</script>

<section class="bg-primary flex flex-col items-center md:h-36 justify-between pt-5 w-full">
	<div
		class="flex flex-col md:flex-row items-start md:items-center justify-center w-[90%] md:w-[95%] lg:w-[90%] mb-3 md:mb-0"
	>
		<p class="font-heading text-white text-xl sm:text-2xl md:text-4xl">
			Interested in working together?
		</p>
		<a href="mailto: yirga.elshaday@gmail.com">
			<button
				class="font-heading bg-white text-sm sm:text-xl text-primary hover:bg-primary hover:text-white capitalize h-7 sm:h-9 w-20 sm:w-28 md:ml-5 mt-2 md:mt-0"
				>Message Me</button
			>
		</a>
	</div>

	<div class="flex flex-col-reverse md:flex-row items-center justify-between mb-2 w-[90%]">
		<p class="hidden sm:flex text-[10px] lg:text-xs text-white opacity-70 text-center mt-1 md:mt-0">
			2023 © Elshaday Yirga Tesfaye
		</p>
		<p class="text-[10px] lg:text-xs text-white opacity-70 text-center md:mt-0">
			Website made with <a
				target="_blank"
				rel="noopener noreferrer"
				class="underline font-bold"
				href="https://kit.svelte.dev">SvelteKit</a
			>
			and
			<a
				target="_blank"
				rel="noopener noreferrer"
				class="underline font-bold"
				href="https://tailwindcss.com">TailwindCSS</a
			>. Hosted on
			<a
				target="_blank"
				rel="noopener noreferrer"
				class="underline font-bold"
				href="https://vercel.com/">Vercel</a
			>.
		</p>
		<Socials iconSize="small" />
	</div>
</section>
