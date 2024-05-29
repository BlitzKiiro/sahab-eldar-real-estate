<script>
	// @ts-nocheck

	// css imports
	import '@splidejs/svelte-splide/css';
	import '$styles/splide-override.css';
	// svelte imports

	// libs imports
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	// imgs imports
	import RentingImage from '$assets/imgs/renting.jpg';
	import MaintenanceImage from '$assets/imgs/maintenance.jpg';
	import CollectionImage from '$assets/imgs/collection.jpg';
	import MediationImage from '$assets/imgs/mediation.jpg';
	import RightArrow from '$assets/imgs/right-arrow.svg';
	import LeftArrow from '$assets/imgs/left-arrow.svg';

	// variables
	let thumbs;
	const thumbsOptions = {
		arrows: false,
		gap: 54,
		isNavigation: true,
		pagination: false,
		perMove: 1,
		perPage: 2,
		direction: 'rtl',
		type: 'loop',
		updateOnMove: true,
		fixedWidth: '364px'
	};

	// funcions
	const changeSlide = (dir) => {
		thumbs.go(dir);
	};
</script>

<div
	id="services"
	class="w-full flex lg:flex-row flex-col items-center lg:items-start justify-center bg-theme-indigo py-32 lg:py-64 gap-y-16"
>
	<div class=" lg:order-1 order-2" data-aos="fade-right" data-aos-once="true">
		<div class="gallery w-full">
			<div class="gallery--thumbs w-full">
				<Splide id="gallery--thumbs" class="w-full" bind:this={thumbs} options={thumbsOptions}>
					<SplideSlide>
						<div class="h-full items-center flex flex-col gap-[52px]">
							<img src={RentingImage} alt="RentingImage" class="h-[400px] object-cover" />
							<p class=" text-white text-2xl">التسويق العقاري</p>
						</div>
					</SplideSlide>
					<SplideSlide>
						<div class="h-full items-center flex flex-col gap-[52px]">
							<img src={MaintenanceImage} alt="RentingImage" class="h-[400px] object-cover" />
							<p class=" text-white text-2xl">الصيانة والتشغيل</p>
						</div>
					</SplideSlide>
					<SplideSlide>
						<div class="h-full items-center flex flex-col gap-[52px]">
							<img src={CollectionImage} alt="RentingImage" class="h-[400px] object-cover" />
							<p class=" text-white text-2xl">إدارة أملاك</p>
						</div>
					</SplideSlide>
					<SplideSlide>
						<div class="h-full items-center flex flex-col gap-[52px]">
							<img src={MediationImage} alt="RentingImage" class="h-[400px] object-cover" />
							<p class=" text-white text-2xl">الوساطه العقارية</p>
						</div>
					</SplideSlide>
				</Splide>
			</div>
			<div class="flex gap-3 justify-center">
				<button
					on:click={() => changeSlide('+1')}
					class="w-14 h-14 bg-transparent items-center justify-center"
				>
					<img src={LeftArrow} alt="next" />
				</button>
				<button
					on:click={() => changeSlide('-1')}
					class="w-14 h-14 bg-white flex items-center justify-center"
				>
					<img src={RightArrow} alt="previous" />
				</button>
			</div>
		</div>
	</div>
</div>
