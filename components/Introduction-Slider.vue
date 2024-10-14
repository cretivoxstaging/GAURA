<template>
  <div class="slider relative w-full h-full overflow-hidden">
    <div
      class="slides absolute inset-0 transition-opacity duration-1000"
      v-for="(image, index) in images"
      :key="index"
      :style="{ opacity: currentIndex === index ? 1 : 0 }"
    >
      <img :src="image" class="w-full h-full object-cover object-center" alt="">
    </div>
    
    <div class="indicators flex justify-center h-full items-end pb-10 relative z-2">
      <span
        v-for="(image, index) in images"
        :key="index"
        class="dot w-2 h-2 mx-1 rounded-full cursor-pointer"
        :class="{ 'bg-white': currentIndex === index, 'bg-gray-300': currentIndex !== index }"
        @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      images: [
        'images/S2-SLIDER.png',
        'https://via.placeholder.com/500x500',
        'https://via.placeholder.com/500x500'
      ]
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    goToSlide(index) {
      this.currentIndex = index;
    }
  },
  mounted() {
    this.interval = setInterval(this.nextSlide, 5000); // Change slide every 5 seconds
  },
  beforeDestroy() {
    clearInterval(this.interval); // Clear interval when component is destroyed
  }
};
</script>

<style scoped>
.slider {
  position: relative;
}

.slides {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: opacity 1s ease-in-out;
}
</style>
