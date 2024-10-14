<template>
  <div>
    <header class="z-20 relative">
      <nav>
        <ul class="flex justify-between bg-transparent h-[90px] items-center px-[32px] fixed w-full"
          :class="{ 'about-us': isAboutUs, 'contact': isContact, 'port': isPort, 'services': isServices }">
          <li><NuxtLink to="/">
              <img src="/images/Logofolio.svg" alt="">
            </NuxtLink></li>
          <li><NuxtLink to="/">
              <img src="/images/Center-Logo.svg" alt="">
            </NuxtLink></li>
          <li class="cursor-pointer"><NuxtLink @click="toggleMenu">
              <img src="/images/Burger.svg" alt="">
            </NuxtLink></li>
        </ul>
      </nav>
    </header>

    <transition name="slide">
      <div v-if="isMenuOpen" class="fixed top-0 right-0 h-dvh w-[38vw] bg-gaura-second shadow-lg z-30">
        <div class="p-[42px] flex justify-end">
          <button @click="toggleMenu" class="rounded-full">
            <svg width="34" height="34" viewBox="0 0 34 34" class="svg-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.627 10.627L17.3137 17.3137L24.0005 24.0005" stroke="#7F3924" stroke-linecap="square" class="path"/>
              <path d="M10.627 24.0005L17.3137 17.3137L24.0005 10.6269" stroke="#7F3924" stroke-linecap="square" class="path"/>
              <circle cx="17" cy="17" r="16.5" stroke="#7F3924" />
            </svg>
          </button>
        </div>
        <div class="md:pt-2 flex flex-col md:px-[80px] h-[70%] ">
          <ul>
            <li v-for="data in navMenu" :key="data.title">
              <NuxtLink :to="data.root" class="block md:text-[4.5vw] transition-all duration-300 hover:font-[500]"  @click="toggleMenu">{{ data.title }}</NuxtLink>
            </li>
          </ul>
          <a href="" class="md:font-[18px] md:pt-[55px] md:mb-auto">hello@gauraatelier.com</a>
          <p class="text-gaura">©️2024 Gaura Atelier</p>
        </div>
      </div>
    </transition>

    <!-- Backdrop -->
    <transition name="fade">
      <div v-if="isMenuOpen" class="fixed inset-0 bg-black bg-opacity-50 z-20" @click="toggleMenu"></div>
    </transition>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';

export default defineComponent({
  name: 'Navbar',
  data() {
    return {
      navMenu: [
        { title: 'About Us', root: '/about-us' },
        { title: 'Portfolio', root: '/portfolio' },
        { title: 'Services', root: '/services' },
        { title: 'Contact', root: '/contact' },
      ]
    };
  },
  props: {

  },
  setup() {
    const isMenuOpen = ref(false);

    function toggleMenu() {
      isMenuOpen.value = !isMenuOpen.value;
      if (isMenuOpen.value) {
        document.body.classList.add('overflow-hidden'); // Disable scrolling
      } else {
        document.body.classList.remove('overflow-hidden'); // Enable scrolling
      }
    }

    // Clean up on unmount
    onBeforeUnmount(() => {
      document.body.classList.remove('overflow-hidden'); // Ensure scrolling is enabled if component is unmounted
    });

    return {
      isMenuOpen,
      toggleMenu,
    };
  },
  computed: {
    isAboutUs() {
      return this.$route.path === '/about-us';
    },
    isContact(){
      return this.$route.path === '/contact';
    },
    isPort(){
      return this.$route.path === '/portfolio';
    },
    isServices(){
      return this.$route.path === '/services';
    },
  }
});
</script>

<style scoped>
.black img {
  filter: invert(1);
}

.white img{
  filter: none;
}

.gaura img{
  filter: brightness(0) saturate(100%) invert(25%) sepia(11%) saturate(4795%) hue-rotate(334deg) brightness(96%) contrast(88%);
}

.about-us img{
 filter: invert(1);
}

.contact img{
  filter: brightness(0) saturate(100%) invert(25%) sepia(11%) saturate(4795%) hue-rotate(334deg) brightness(96%) contrast(88%);
}
.port img{
  filter: brightness(0) saturate(100%) invert(25%) sepia(11%) saturate(4795%) hue-rotate(334deg) brightness(96%) contrast(88%);
}
.services img{
  filter: brightness(0) saturate(100%) invert(25%) sepia(11%) saturate(4795%) hue-rotate(334deg) brightness(96%) contrast(88%);
}

.svg-icon {
    transition: stroke 0.3s ease;
}
.svg-icon:hover .path {
  stroke: white;
}
.svg-icon:hover circle {
    stroke: #7F3924; /* Change to your desired hover color */
}

/* Transition styles */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter {
  transform: translateX(100%);
}
.slide-enter-to {
  transform: translateX(0);
}
.slide-leave {
  transform: translateX(0);
}
.slide-leave-to {
  transform: translateX(100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-leave {
  opacity: 1;
}

/* Prevent scrolling */
.overflow-hidden {
  overflow: hidden;
}
</style>

