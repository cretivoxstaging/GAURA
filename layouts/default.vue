<!-- <template>
  <div>
    <Navbar :isInverted="isInverted" />
    <slot />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';

export default defineComponent({
  setup() {
    const isInverted = ref(false);

    const checkScroll = () => {
      const section3 = document.getElementById('section3');
      if (section3) {
        const rect = section3.getBoundingClientRect();
        
        // Check if the top of section 3 is at the top of the viewport
        const isAtTop = rect.top <= 0 && rect.bottom > 0;

        // Log to console when section 3 is at the top
        if (isAtTop) {
          console.log("Section 3 is at the top");
        }

        // Update isInverted based on whether section 3 is at the top
        isInverted.value = isAtTop;
      }
    };

    onMounted(() => {
      window.addEventListener('scroll', checkScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', checkScroll);
    });

    return { isInverted };
  },
});
</script>

<style>
/* Add any necessary styles here */
</style> -->

<template>
  <Navbar/>
  <slot />
  <Footer />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';
import Footer from '~/components/Footer.vue';

export default defineComponent({
  components:{
    Footer,
  },
  setup() {
    const currentSection = ref(1); // Default to section 1
    const isInverted = ref(false);
    const isSecond = ref(false);

    const checkScroll = () => {
      const sections = [
        document.getElementById('section1'),
        document.getElementById('section2'),
        document.getElementById('section3'),
      ];

      sections.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          
          // Check if the section is at the top
          if (rect.top <= 0 && rect.bottom > 0) {
            currentSection.value = index + 1; // Set current section (1, 2, or 3)
            // isInverted.value = index === 2;
            // isSecond.value = index === 3;
            if(index === 1){
              isSecond.value = true
              console.log("index 1")
            } else if(index === 2){
              isInverted.value = true
              console.log("index 2")
            } else{
              isInverted.value = false
              isSecond.value = false
            }
          }
        }
      });
    };

    onMounted(() => {
      window.addEventListener('scroll', checkScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', checkScroll);
    });

    return { currentSection, isInverted, isSecond };
  },
});
</script>

<style>
/* Add any necessary styles here */
</style>

