<template>
  <!-- Slider main container -->
  <div class="swiper">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <slot/>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination" v-if="props?.navigation"></div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev" v-if="props?.prev || props?.navigation || true"></div>
    <div class="swiper-button-next" v-if="props?.next || props?.navigation || true"></div>

    <!-- If we need scrollbar -->
    <div class="swiper-scrollbar" v-if="props?.scrollbar || false"></div>
  </div>

</template>
<script setup lang="ts">

import Swiper, {Navigation, Pagination, Scrollbar} from 'swiper';

interface Props {
  slidesPerView?: number
}

const props = defineProps<Props>();
// Import Swiper and modules

// Now you can use Swiper
const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  modules: [Navigation, Pagination, Scrollbar],
  speed: 500,
  height: 100,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  ...props,
});


</script>
<style lang="scss">
@import 'swiper/css';
@import 'swiper/css/bundle';
</style>
