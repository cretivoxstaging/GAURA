<template>
  <div class="relative">
    <Swiper
      class="h-dvh"
      :modules="[SwiperAutoplay, SwiperEffectCreative]"
      :speed="750"
      :slides-per-view="1"
      :loop="true"
      :effect="'creative'"
      :allow-touch-move="false"
      :autoplay="{ delay: 4000 }"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
    >
      <SwiperSlide v-for="slide in images" :key="slide">
        <img :src="slide" class="h-full w-full object-cover" alt="">
      </SwiperSlide>
    </Swiper>
    <div class="absolute top-0 z-10 flex items-end md:p-[30px] w-full h-full">
      <h1 class="text-[12.5vw] text-white font-[300]" data-aos="fade-up" data-aos-duration="1000">{{ texts.S1_TITLE }}</h1>
    </div>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  data() {
    return {
      images: [
        '/images/HERO-SLIDER/1.png',
        '/images/HERO-SLIDER/2.png',
        '/images/HERO-SLIDER/3.png',
      ],
      texts: HOME_PAGE,
    };
  },
  mounted() {
    AOS.init();
  }
}
</script>

<style>
/* Ensure no overflow hidden is applied to parent elements */
</style>
