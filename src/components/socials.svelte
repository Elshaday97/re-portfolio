<script>
	const LinkedIn = '/icons/linkedin.svg';
	const Twitter = '/icons/twitter.svg';
	const GitLab = '/icons/gitlab.svg';
	const GitHub = '/icons/github.svg';
	const Medium = '/icons/medium.svg';

	export let iconSize = 'regular';
	const socials = [
		{
			label: 'LinkedIn',
			link: 'https://www.linkedin.com/in/elshaday-tesfaye-ab0a511b4/',
			img: LinkedIn
		},
		{
			label: 'Twitter',
			link: 'https://twitter.com/elshaday97/',
			img: Twitter
		},
		{
			label: 'GitLab',
			link: 'https://gitlab.com/elshaday1/',
			img: GitLab
		},
		{
			label: 'GitHub',
			link: 'https://github.com/Elshaday97/',
			img: GitHub
		},
		{
			label: 'Medium',
			link: 'https://medium.com/@elshaday/',
			img: Medium
		}
	];
</script>

<div class="flex justify-between items-center">
	{#each socials as item}
		<a href={item.link} target="_blank" rel="noreferrer">
			<div
				class={`cursor-pointer flex items-center justify-center ${
					iconSize === 'small'
						? 'h-8 w-8 mr-2 sm:mr-3'
						: 'h-8 w-8 sm:h-9 sm:w-9 md:h-12 md:w-12 mr-3'
				} rounded-[50%] bg-primary hover:-translate-y-1`}
			>
				<img
					alt="socials"
					class={`${iconSize === 'small' ? 'w-5 h-5' : 'w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:w-7'}`}
					src={item.img}
				/>
			</div>
		</a>
	{/each}
</div>
