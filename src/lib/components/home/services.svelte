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
	class="w-full flex lg:flex-row flex-col items-center lg:items-start justify-center lg:justify-between bg-theme-indigo py-64 gap-y-64"
>
	<div class=" lg:order-1 order-2" data-aos="fade-right" data-aos-once="true">
		<div class="gallery w-full">
			<div class="gallery--thumbs w-full">
				<Splide id="gallery--thumbs" class="w-full" bind:this={thumbs} options={thumbsOptions}>
					<SplideSlide>
						<div class="h-full items-center flex flex-col gap-[52px]">
							<img src={RentingImage} alt="RentingImage" class="h-[400px] object-cover" />
							<p class=" text-white text-2xl">التسويق والتأجير</p>
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
							<p class=" text-white text-2xl">التحصيل</p>
						</div>
					</SplideSlide>
				</Splide>
			</div>
			<div class="flex gap-3 lg:ml-[100px] lg:justify-start justify-center">
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
	<dir
		data-aos="fade-left"
		data-aos-once="true"
		class="flex flex-col gap-8 lg:ap-16 justify-center h-full lg:order-2 order-1 lg:mr-[15vw] mx-3 px-4"
		dir="rtl"
	>
		<h1 class="text-white font-bold text-4xl">خدماتنا</h1>
		<div class="flex flex-col gap-2">
			<p class="text-theme-dark-gray lg:w-[20vw]">
				مع خبرتنا الواسعة في مجال إدارة العقارات السكنية والتجارية، نقدم لكم باقة شاملة من الخدمات
				والتي تشمل
			</p>
			<p class="text-theme-dark-gray lg:w-[20vw]">
				التسويق والتأجير: نقوم بتسويق عقارك بشكل فعّال ونضمن استئجاره بأفضل الشروط والأسعار.
			</p>
			<p class="text-theme-dark-gray lg:w-[20vw]">
				الصيانة والتشغيل: نهتم بصيانة عقارك بدقة ونقوم بتشغيله بكفاءة لضمان استمرارية قيمته
				وجاذبيته.
			</p>
			<p class="text-theme-dark-gray lg:w-[20vw]">
				التحصيل: نقوم بجمع الإيجارات بدقة وفعالية، مما يسهم في تحقيق أقصى عائد ممكن على عقارك.
			</p>
		</div>
	</dir>
</div>
