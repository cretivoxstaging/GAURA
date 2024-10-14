<template>
  <div>
    <section class="container-xl md:min-h-dvh bg-gaura-second md:pt-[150px] md:px-[31px]">
      <div class="grid md:grid-cols-5 md:gap-20">
        <div class="">
          <h1 class="text-[22px] uppercase">Our Portfolio</h1>
        </div>
        <div class="col-span-4 md:ps-10 grid md:grid-cols-2 md:gap-20">
          <h1 class="text-[34px] leading-[120%]">
            We craft unexpected design that commands attention, to enrich our lived environment and the way people
            experience the world they live, play and work in.
          </h1>
          <p class="md:pe-36 text-[14px]">
            We are interior designers with a strong architectural sensibility, dedicated to enhancing everyday
            environments and contributing to better quality of life.
            <br><br>
            Since our launch in 2009, Material Creative has focused on creating unexpected design to bring people
            together and command attention, which has earned us an award winning reputation both nationally and
            internationally.
          </p>
        </div>
      </div>
      <!-- Portfolio -->
      <div class="grid md:grid-cols-5 md:gap-20 md:mt-12 items-start">
        <!-- Category Buttons with Counts -->
        <div class="flex flex-col md:mt-0 md:gap-1 sticky top-[10rem]">
          <button @click="filterCategory('all')"
            class="category-button flex transition-all duration-300 hover:!font-[600] hover:underline"
            :class="{ '!font-[600]': selectedCategory === 'all' }">All <span class="ms-auto">({{ portfolio.length
              }})</span></button>
          <button v-for="(count, category) in categoryCounts" :class="{ '!font-[600]': selectedCategory === category }"
            :key="category" @click="filterCategory(category)"
            class="category-button flex transition-all duration-300 hover:!font-[600] hover:underline">
            {{ category }}
            <span class="ms-auto">({{ count }})</span>
          </button>
        </div>
        <!-- <h1 class="text-[22px] w-[27vw] sticky top-0 font-[300] leading-[110%]" data-aos="fade-right" data-aos-duration="1000">OUR PORTFOLIO</h1> -->
        <div class=" grid md:grid-cols-3 md:gap-[20px] col-span-4 md:ps-10 md:gap-y-28 md:pb-20">
          <div v-for="(item, index) in filteredPortfolio" :key="item.client_name" class="portfolio-item">
            <div class="relative group">
              <img :src="item.cover" alt="Portfolio Image" class="portfolio-image w-full object-cover"
              :class="index % 2 === 0 ? 'aspect-[9/14]' : 'aspect-square'"  />
              <div
                class="absolute inset-0 flex items-center justify-center bg-[#7F3924CC] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href="#"
                  class="text-white text-[17.5px] hover:underline transition-all duration-300 hover:text-[18px]">View
                  Project</a>
              </div>
            </div>
            <div class="flex items-center md:gap-2 md:mt-4">
              <h1 class="text-[41px] leading-[90%]">{{ index < 9 ? '0' + (index + 1) : index + 1 }}</h1>
              <h4 class="client-name leading-[115%] text-[16px] ">
                {{ item.client_name.split(' ')[0] }}<br>
                {{ item.client_name.split(' ').slice(1).join(' ') }}
              </h4>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      portfolio: [
        { client_name: 'Langham Residence', cover: 'images/PORTFOLIO/1.png', category: 'property' },
        { client_name: 'Langham Residence', cover: 'images/PORTFOLIO/2.png', category: 'property' },
        { client_name: 'Langham Residence', cover: 'images/PORTFOLIO/3.png', category: 'home' },
        { client_name: 'Langham Residence', cover: 'images/PORTFOLIO/4.png', category: 'industry' },
        { client_name: 'Langham Residence', cover: 'images/PORTFOLIO/2.png', category: 'property' },
        { client_name: 'Langham Residence', cover: 'images/PORTFOLIO/3.png', category: 'home' },
        { client_name: 'Langham Residence', cover: 'images/PORTFOLIO/4.png', category: 'industry' },
        { client_name: 'Langham Residence', cover: 'images/PORTFOLIO/2.png', category: 'property' },
        { client_name: 'Langham Residence', cover: 'images/PORTFOLIO/3.png', category: 'home' },
        { client_name: 'Langham Residence', cover: 'images/PORTFOLIO/4.png', category: 'industry' },
        { client_name: 'Langham Residence', cover: 'images/PORTFOLIO/4.png', category: 'no category' },
      ],
      selectedCategory: 'all'
    };
  },
  computed: {
    filteredPortfolio() {
      if (this.selectedCategory === 'all') {
        return this.portfolio;
      }
      return this.portfolio.filter(item => item.category === this.selectedCategory);
    },
    uniqueCategories() {
      const categories = this.portfolio.map(item => item.category);
      return [...new Set(categories)];
    },
    categoryCounts() {
      const counts = {};
      this.portfolio.forEach(item => {
        if (!counts[item.category]) {
          counts[item.category] = 0;
        }
        counts[item.category]++;
      });
      return counts;
    }
  },
  methods: {
    filterCategory(category) {
      this.selectedCategory = category;
    }
  }
};
</script>

<style scoped>
.category-button {
  text-align: left;
  font-size: 17px;
  text-transform: capitalize;
  width: 70%;
  font-weight: 300;
}
</style>
