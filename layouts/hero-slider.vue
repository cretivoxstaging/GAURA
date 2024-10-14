<template>
  <div class="slider h-dvh relative">
    <div class="slides" :style="{ transform: `translateX(-${currentIndex * 100}%)`, transitionDuration: currentIndex === images.length ? '0s' : '0.5s' }">
      <div class="slide" v-for="(image, index) in imagesWithLoop" :key="index">
        <img :src="image" alt="Image Slider" class="object-cover object-center h-dvh w-full"/>
      </div>
    </div>
    <div class="absolute top-0 z-2 flex items-end md:p-[30px] w-full h-full">
      <h1 class="text-[12.5vw] text-white font-[300]" data-aos="fade-up" data-aos-duration="1000">{{ texts.S1_TITLE }}</h1>
    </div>
  </div>
</template>

<script>
import AOS from 'aos';

export default {
  data() {
    return {
      currentIndex: 0,
      images: [
        '/images/HERO-SLIDER/1.png',
        '/images/HERO-SLIDER/2.png',
        '/images/HERO-SLIDER/3.png',
      ],
      texts: HOME_PAGE,
      transitioning: false,
    };
  },
  computed: {
    imagesWithLoop() {
      return [...this.images, this.images[0]]; // Add the first image at the end for looping
    }
  },
  methods: {
    nextSlide() {
      if (this.currentIndex < this.images.length) {
        this.currentIndex++;
      } else {
        // Temporarily disable transition, reset to first slide
        this.transitioning = true;
        setTimeout(() => {
          this.currentIndex = 0;
          this.transitioning = false;
        }, 0);
      }
    },
    goToSlide(index) {
      this.currentIndex = index;
    }
  },
  mounted() {
    AOS.init();
    this.interval = setInterval(this.nextSlide, 3000); // Change slide every 3 seconds
  },
  beforeDestroy() {
    clearInterval(this.interval); // Clear interval when component is destroyed
  }
};
</script>

<style scoped>
.slider {
  position: relative;
  overflow: hidden;
  width: 100%;
}

.slides {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slide {
  min-width: 100%;
  box-sizing: border-box;
}

.indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
}

.indicators span {
  height: 10px;
  width: 10px;
  margin: 0 5px;
  background-color: #bbb;
  border-radius: 50%;
  cursor: pointer;
}

.indicators .active {
  background-color: #717171;
}
</style>
