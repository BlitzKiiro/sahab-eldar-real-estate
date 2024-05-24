<script lang="ts">
	// styles
	import '$styles/globals.css';
	import 'aos/dist/aos.css';

	// svelte
	// import type { LayoutData } from './$types';
	import { onMount } from 'svelte';

	// libs
	import AOS from 'aos';

	// components
	import Navbar from '$/lib/components/layout/navbar.svelte';
	import Footer from '$/lib/components/layout/footer.svelte';

	// export let data: LayoutData;

	onMount(() => {
		AOS.init();
	});
</script>

<Navbar />
<slot />
<Footer />
