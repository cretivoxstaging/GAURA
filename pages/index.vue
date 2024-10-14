<template>
  <div>
    <!-- Section 1 -->
    <section>
      <div class="container-xl">
        <Test />
        <!-- <HeroSlider /> -->
      </div>
    </section>
    <!-- Section 2 -->
    <section class="container-xl">
      <div class="h-dvh flex">
        <div class="w-[45%] bg-gaura px-[40px] pt-[175px] pb-[92px] flex flex-col">
          <h1 class="text-[34px] mb-auto font-[300] uppercase" data-aos="fade-right"
            data-aos-anchor-placement="top-bottom" data-aos-duration="1000">{{ HOME_PAGE.S2_TITLE }}</h1>
          <p class="text-[32px] pe-[80px] leading-[42px] font-[300]" data-aos="fade-right"
            data-aos-anchor-placement="top-bottom" data-aos-duration="1000">{{ HOME_PAGE.S2_COPY }}</p>
          <button class="btn-white md:max-w-[94.8px] md:mt-[44px]" data-aos="fade-right"
            data-aos-anchor-placement="top-bottom" data-aos-duration="1000">Read More</button>
        </div>
        <div class="w-[55%] bg-gaura">
          <IntroductionSlider data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" />
        </div>
      </div>
    </section>
    <!-- Section 3 -->
    <section id="section2" class="container-xl">
      <div class="h-auto bg-gaura-second">
        <div class="flex justify-between px-[36px] md:mb-[58px] md:pt-[195px] ">
          <h1 class="text-[34px] uppercase leading-[34px] " data-aos="fade-down" data-aos-anchor-placement="top-bottom"
            data-aos-duration="1000">{{ texts.S3_TITLE }}</h1>
          <div class="group w-[20%]">
            <p class="text-[14px] md:mb-14" data-aos="fade-down" data-aos-anchor-placement="top-bottom"
              data-aos-duration="1000">{{ texts.S3_COPY }}</p>
            <button class="btn-primary" data-aos="fade-left" data-aos-anchor-placement="top-bottom"
              data-aos-duration="1000">Read More</button>
          </div>
        </div>
        <div class="portfolio md:gap-[21px] grid grid-cols-4 px-[36px]">
          <div v-for="(item, index) in portfolioItems" :key="item.id" class="relative group"
            :data-aos="index % 2 === 0 ? 'fade-up' : 'fade-down'" data-aos-duration="1000"
            :data-aos-delay="index * 100">
            <div class="relative group">
              <img class="w-full md:mb-3" :src="item.image" alt="">
              <div
                class="absolute inset-0 flex items-center justify-center bg-[#7F3924CC] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href="#"
                  class="text-white text-[17.5px] hover:underline transition-all duration-300 hover:text-[18px]">View
                  Portfolio</a>
              </div>
            </div>
            <div class="flex items-center relative z-10 cursor-pointer">
              <h5 class="text-[41px] md:me-2">{{ item.id.toString().padStart(2, '0') }}</h5>
              <div class="hover:font-[700] transtion-all duration-300">
                <p class="text-[16px] leading-[110%]">{{ item.title.split(' ')[0] }}</p>
                <p class="text-[16px] leading-[100%]">{{ item.title.split(' ')[1] }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Section 4 & 5-->
    <section id="section3" class="container-xl bg-gaura-second">
      <div class="h-auto">
        <div class="flex justify-between px-[36px] pt-[195px] md:mb-[58px]">
          <h1 class="text-[34px] leading-[34px] uppercase text-black" data-aos="fade-right"
            data-aos-anchor-placement="top-bottom" data-aos-duration="1000">{{ texts.S4_TITLE }}</h1>
          <div class="group w-[20%]">
            <p class="text-[14px] md:mb-14 text-black" data-aos="fade-left" data-aos-anchor-placement="top-bottom"
              data-aos-duration="1000">
              {{ texts.S4_COPY }}
            </p>
            <button class="btn-black" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
              data-aos-duration="1000">
              Read More
            </button>
          </div>
        </div>
        <img src="/images/S4-IMAGE.png" class="w-full" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000" alt="">
      </div>
      <div class="group px-[36px] md:pt-[154px]">
        <div class="border-b-[1px] border-black flex justify-between md:pb-[100px] ">
          <h1 class="text-[25px] text-black" data-aos="fade-right">{{ texts.S5_TITLE }}</h1>
          <div class="group w-[40%]" data-aos="fade-left">
            <p class="text-[32px] font-[300] text-black">
              {{ texts.S5_COPY }}
            </p>
          </div>
        </div>
        <div class="group md:py-[74px]" data-aos="fade-up">
          <h1 class="text-center text-[22px] text-black uppercase md:mb-[40px]">{{ texts.S6_TITLE }}</h1>
          <Client />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Client from '~/components/Client.vue';
import IntroductionSlider from '~/components/Introduction-Slider.vue';
import Test from '~/components/Test.vue';
import HeroSlider from '~/layouts/hero-slider.vue';

export default {
  components: {
    HeroSlider,
    IntroductionSlider,
    Client,
    Test
  },
  data() {
    return {
      texts: HOME_PAGE,
      portfolioItems: [
        { id: 1, title: 'Langham Residence', image: 'images/PORTFOLIO/1.png' },
        { id: 2, title: 'Langham Residence', image: 'images/PORTFOLIO/2.png' },
        { id: 3, title: 'Langham Residence', image: 'images/PORTFOLIO/3.png' },
        { id: 4, title: 'Langham Residence', image: 'images/PORTFOLIO/4.png' }
      ]
    };
  }
};
</script>

<style></style>