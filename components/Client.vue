<template>
  <div>
    <NuxtMarquee gradient-color="#D8C8AC" class="!flex">
  <img
    :src="data.image"
    v-for="data in client"
    :key="data.id"
    class="w-full h-[80px] md:mx-[40px]"
    alt=""
  >
</NuxtMarquee>
    
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      client: [
        { image: '/images/client.png' },
        { image: '/images/client.png' },
        { image: '/images/client.png' },
        { image: '/images/client.png' },
        { image: '/images/client.png' },
        { image: '/images/client.png' },
      ]
    };
  }
};

</script>

<style>

</style>