<script>
	export let variant = 'vertical';
	export let cardImg = '';
	export let title = '';
	export let description = '';
	export let role = '';
	export let stack = '';
	export let link = '';
</script>

{#if variant === 'vertical'}
	<div
		class="relative flex flex-col items-center bg-white rounded-2xl md:rounded-3xl shadow-2xl hover:shadow-2xl w-full sm:w-[400px] md:min-w-[300px] lg:min-w-[350px] md:h-[400px] mb-5 md:mb-0 mr-0 md:mr-5"
	>
		<img alt="proj" class="rounded-2xl w-full h-[45%]  lg:min-h-[55%]" src={cardImg} />
		<div class="flex flex-col items-start w-[95%] sm:w-[93%] mt-3 mb-3">
			<div class="flex justify-between items-center w-full">
				<p class="font-heading text-primary text-3xl">{title}</p>
				<p class="font-[200] text-secondary text-xs text-right">{stack}</p>
			</div>
			<p class="mt-1 text-sm opacity-70">{description}</p>
			<p class="mt-3 sm:mt-5 text-primary font-[500] text-xs">Role: {role}</p>
			<a
				class="text-xs underline opacity-80 font-[200]"
				href={link}
				target="_blank"
				rel="noopener noreferrer">Visit Website</a
			>
		</div>
	</div>
{:else}
	<div
		class="flex flex-col sm:flex-row items-center justify-center sm:justify-between bg-white rounded-2xl md:rounded-3xl shadow-2xl hover:shadow-3xl w-full sm:h-[300px] md:h-[250px] mb-10"
	>
		<img
			alt="proj"
			class="hidden sm:block rounded-2xl w-full sm:w-[40%] min-h-[40%] sm:h-[100%]"
			src={cardImg}
		/>
		<div class="flex flex-col items-center md:items-start w-[90%] sm:w-[60%] my-4 sm:mx-5">
			<div class="flex flex-col md:flex-row justify-between items-center md:items-end w-full">
				<p class="font-heading text-primary text-3xl text-center md:text-left">{title}</p>
				<p class="font-[200] text-secondary text-xs text-right">{stack}</p>
			</div>
			<p class="mt-3 text-sm sm:text-base opacity-80 mb-3 text-center md:text-left">
				{description}
			</p>
			<a
				class="text-xs underline text-secondary font-[200]"
				href={link}
				target="_blank"
				rel="noopener noreferrer"
				><button class="bg-primary font-heading text-xl text-white uppercase h-9 w-28">
					Read Article
				</button></a
			>
		</div>
	</div>
{/if}
