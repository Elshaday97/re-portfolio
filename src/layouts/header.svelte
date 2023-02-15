<script>
	const navLinks = [
		{ label: 'About', href: '#about' },
		{ label: 'Specialities', href: '#specialities' },
		{ label: 'Projects', href: '' },
		{ label: 'Blogs', href: '#blogs' },
		{ label: 'Contact Me', href: 'mailto: yirga.elshaday@gmail.com', type: 'button' }
	];
</script>

<nav class="flex justify-center mt-6 mb-6 w-full">
	<div class="flex justify-between items-center w-11/12">
		<p class="font-heading text-black text-xl uppercase">Elshaday</p>
		<ul class="hidden sm:flex justify-between items-center w-1/3 sm:w-3/5 md:3/6 lg:w-2/5 ">
			{#each navLinks as navLink}
				{#if navLink.type === 'button'}
					<a href={navLink.href}
						><button
							class="bg-primary font-heading text-xl text-white hover:text-primary hover:bg-white uppercase h-9 w-28"
						>
							{navLink.label}
						</button></a
					>
				{:else}
					<li class="font-heading text-xl text-white tracking-wide uppercase">
						<a href={navLink.href}>{navLink.label}</a>
					</li>
				{/if}
			{/each}
		</ul>
	</div>
</nav>
