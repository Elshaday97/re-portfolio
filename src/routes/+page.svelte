<script lang="ts">
	import About from '../components/about.svelte';
	import Blogs from '../components/blogs.svelte';
	import Projects from '../components/projects.svelte';
	import Specialities from '../components/specialities.svelte';
	import type { IPageData } from './types';

	export let data: IPageData;
	const { content } = data;
</script>

<svelte:head>
	<title>elshaday</title>
	<meta name="description" content="Elshaday is a web developer based in Addis Ababa, Ethiopia" />
	<meta name="author" content="Elshaday Tesfaye" />
	<meta property="og:title" content="Elshaday Tesfaye" />
</svelte:head>

{#if content}
	<About pageContent={content.about} />
	<Specialities />
	<Projects pageContent={content.projects} />
	<Blogs pageContent={content.blogs} />
{:else}
	<p>Not found component</p>
{/if}
