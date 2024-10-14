<template>
  <div>
    <section class="container-xl md:min-h-dvh bg-[#AB8A6A] md:pt-[150px] md:px-[31px]">
      <div class="flex md:gap-20">
        <h1 class="text-[22px] w-[20vw] font-[300] leading-[110%]" data-aos="fade-right" data-aos-duration="1000">OUR STORY <br>& LEGACY</h1>
        <h3 class="text-[34px] md:leading-[120%] w-[30vw]" data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000">We deliver an extensive range
          of interior design services, meticulously curated for both commercial and residential undertakings.
        </h3>
        <p class="w-[27%] text-[14px]" data-aos="fade-down" data-aos-delay="150" data-aos-duration="1000">
          With the property located in a vogue glass faceted high rise building in the heart of the bustling business
          district of Jakarta, our client is in need of a warm abode to come home to.
          <br><br>
          Veneered wall panels are installed throughout the space, adding the classic charm of natural warm wood colours
          to balance out the cool toned marble floor.
        </p>
      </div>
      <div class="grid md:grid-cols-2 md:pt-[55px] md:gap-[20px]">
        <img class="w-full" src="/images/ABOUT/1.png" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000" alt="">
        <img class="w-full" src="/images/ABOUT/2.png" data-aos="fade-left" data-aos-delay="250" data-aos-duration="1000" alt="">
      </div>
      <div class="group md:mt-[122px] md:pb-[60px]">
        <div class="flex md:gap-[4rem] justify-between">
          <h1 class="text-[22px] w-[12vw] font-[300] leading-[110%]" data-aos="fade-right" data-aos-duration="1000">BEHIND <br>THE VISION</h1>
          <div class="w-[40vw] flex flex-col">
            <h3 class="text-[34px] md:leading-[130%] font-[300]" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
            At Gaura Atelier, our dynamic and diverse team blends creativity and relevant principles to ensure each project is executed with unrivalled professionalism and a truly authentic approach to design. We are committed to creating unique experiences that reflect our core values and expertise.
          </h3>
          <p class="text-[14px] md:w-[70%] md:mt-auto" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000">As a diverse team at Gaura Atelier, we are driven by our individual passion and leadership. Working closely with both team members and clients, we dedicate ourselves to delivering each project with professionalism and an authentic design expression.</p>
          </div>
        <div class="g">
          <img src="/images/ABOUT/team.png" class="w-[470px] md:mb-[16px]" data-aos="fade-left" alt="">
          <p class="text-[24px] font-[500]" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">Anna Douglas</p>
          <p class="text-[18px] font-[300]" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">Director</p>
        </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      team: [
        { id: 1, name: 'Olivia McNeil', position: 'CO-Founder & Creative Director', image: 'images/ABOUT/team-1.png' },
        { id: 2, name: 'Olivia McNeil', position: 'CO-Founder & Creative Director', image: 'images/ABOUT/team-2.png' },
        { id: 3, name: 'Olivia McNeil', position: 'CO-Founder & Creative Director', image: 'images/ABOUT/team-3.png' },
      ]
    };
  }
};
</script>

<style></style>