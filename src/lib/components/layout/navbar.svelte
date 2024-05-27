<script>
	import { scale, slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	import logo from '$assets/imgs/logo transparent.png';
	import CloseIcon from '$assets/imgs/close.svg';
	import MenuIcon from '$assets/imgs/menu.svg';

	let isMenuOpened = false;

	const toggleMenu = () => {
		isMenuOpened = !isMenuOpened;
	};

	const navURLs = [
		{
			name: 'الرئيسية',
			url: '/'
		},

		{
			name: 'من نحن',
			url: '/#about'
		},

		{
			name: 'خدماتنا',
			url: '/#services'
		},

		{
			name: 'تواصل معنا',
			url: '/#contact'
		}
	];
</script>

<div
	class="w-full h-28 bg-white shadow-sm flex items-center justify-between py-8 px-4 lg:px-32 z-30"
	class:fixed={isMenuOpened}
	dir="rtl"
>
	<a href="/"><img alt="Sahab Eldar" src={logo} class=" h-14" /></a>
	<button class="lg:hidden block" on:click={toggleMenu}>
		{#if isMenuOpened}
			<img
				src={CloseIcon}
				alt="menu"
				class="w-6 h-6"
				in:scale={{ duration: 500, opacity: 0.5, start: 0.5, easing: quintOut }}
			/>
		{:else}
			<img
				src={MenuIcon}
				alt="menu"
				class="w-6 h-6"
				in:scale={{ duration: 500, opacity: 0.5, start: 0.5, easing: quintOut }}
			/>
		{/if}
	</button>
	<div class="hidden lg:flex lg:gap-[72px]">
		{#each navURLs as nav, i}
			<a href={nav.url} class="navlink text-lg" class:font-bold={i == 0}>{nav.name}</a>
		{/each}
	</div>
</div>
{#if isMenuOpened}
	<div
		transition:slide={{ delay: 250, duration: 300, easing: quintOut, axis: 'y' }}
		class="lg:hidden flex flex-col gap-8 justify-start items-center fixed top-28 left-0 z-20 w-full h-full bg-white py-14"
	>
		{#each navURLs as nav, i}
			<a on:click={toggleMenu} href={nav.url} class="navlink text-xl" class:font-bold={i == 0}
				>{nav.name}</a
			>
		{/each}
	</div>
{/if}

<style lang="postcss">
	.navlink {
		@apply relative;
		@apply after:content-[''] after:block after:absolute after:-bottom-2 after:w-full after:h-[2px];
		@apply after:bg-black;
		@apply after:scale-0 after:hover:scale-100 after:transition;
	}
</style>
