<script>
	import Footer from '../layouts/footer.svelte';
	import Header from '../layouts/header.svelte';
	import '../styles/app.css';
</script>

<Header />
<main class="flex flex-col items-center w-full">
	<slot />
</main>
<Footer />
