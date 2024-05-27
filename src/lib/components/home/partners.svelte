<script>
	import Ejar from '$assets/imgs/Ejar.png';
	import Fal from '$assets/imgs/fal.png';
	import General from '$assets/imgs/general_realstate.png';
</script>

<div class="bg-cyan my-28 flex flex-col justify-center items-center gap-4" id="partners">
	<h1 class="font-bold text-4xl" data-aos="fade-up" data-aos-once="true">شركاء النجاح</h1>

	<div class="flex flex-wrap justify-center gap-6 mt-8 lg:mt-[100px]" dir="rtl">
		<div
			class="bg-theme-light-blue p-5 rounded-xl flex items-center justify-center w-[350px]"
			data-aos="fade-up"
			data-aos-once="true"
		>
			<img src={Ejar} alt="ejar" class="max-h-[250px]" />
		</div>
		<div
			class="bg-theme-light-blue p-5 rounded-xl flex items-center justify-center w-[350px] lg:h-auto h-[180px]"
			data-aos="fade-up"
			data-aos-once="true"
			data-aos-delay="50"
		>
			<img src={Fal} alt="Fal" class="max-h-[250px]" />
		</div>
		<div
			class="bg-theme-light-blue p-5 rounded-xl flex items-center justify-center w-[350px]"
			data-aos="fade-up"
			data-aos-once="true"
			data-aos-delay="100"
		>
			<img src={General} alt="General" class="max-h-[125px]" />
		</div>
	</div>
</div>
