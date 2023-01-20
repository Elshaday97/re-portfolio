<script>
	import Card from '../components/card.svelte';

	const SvelteImg = '/images/svelte.webp';
	const ReactNativeImg = '/images/rn.webp';
	const ReduxToolkitImg = '/images/rd.webp';
</script>

<section
	class="flex justify-center  mt-[30px] mt-[50px] md:mt-[80px] lg:mt-[100px] mb-[40px] sm:mb-[110px] w-full"
	id="blogs"
>
	<div class="flex flex-col items-center w-[90%] lg:w-[80%]">
		<p
			class="text-4xl sm:text-5xl md:text-6xl font-heading text-gray uppercase text-center md:text-left"
		>
			Blogs
		</p>
		<p
			class="text-base md:text-xl font-[300] mb-6 md:mb-8 text-left text-center md:text-left opacity-70"
		>
			ideas - research - creative writing
		</p>
		<div class="flex flex-col items-center justify-center mt-3 sm:mt-5 w-[90%]">
			<Card
				cardImg={SvelteImg}
				title="The framework-less framework - Svelte."
				description="Svelte is a UI framework that helps us build reusable and self-contained components in plain HTML, CSS and JavaScript..."
				stack="frontend tools"
				link="https://medium.com/@elshaday/the-framework-less-framework-svelte-a02da670f7e5"
				variant="horizontal"
			/>
			<Card
				cardImg={ReduxToolkitImg}
				title="Why you should switch to Redux Toolkit, Part I"
				description="If you have been using Redux for managing your application’s state, you unfortunately know how much of a tiresome work it is to get it right..."
				stack="frontend tools"
				link="https://medium.com/@elshaday/why-you-should-switch-to-redux-toolkit-part-i-7f90e72a37b4"
				variant="horizontal"
			/>
			<Card
				cardImg={ReactNativeImg}
				title="A deeper look into React Native and its architecture, Part I"
				description="React Native is a framework that allows the development of robust cross platform applications using the popular JavaScript library, React..."
				stack="frontend tools"
				link="https://medium.com/@elshaday/a-deeper-look-into-react-native-and-its-architecture-part-i-71160596468e"
				variant="horizontal"
			/>
			<div class="flex w-full items-start">
				<a href="https://elshaday.medium.com/" target="_blank" rel="noopener noreferrer"
					><button class="bg-primary font-heading text-xl text-white uppercase h-9 w-28">
						View all
					</button></a
				>
			</div>
		</div>
	</div>
</section>
