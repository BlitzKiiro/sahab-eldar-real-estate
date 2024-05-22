<script lang="ts">
	import '$styles/globals.css';
	import type { LayoutData } from './$types';

	import Navbar from '$/lib/components/layout/navbar.svelte';
	import Footer from '$/lib/components/layout/footer.svelte';

	// export let data: LayoutData;
</script>

<Navbar />
<slot />
<Footer />
