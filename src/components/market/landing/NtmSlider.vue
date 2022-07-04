<template>
  <div class="products-sweeper w-full">
    <Swiper
        :modules="['Keyboard', 'Navigation', 'Autoplay']"
        slidesPerView="1"
        centeredSlides="false"
        grabCursor="true"
        pagination="clickable: true"
        scrollbar="draggable: true"
        keyboard="enabled: true"
        navigation
        autoplay="delay: 3000"
        className="mySwiper"
    >
      <SwiperSlide v-for="banner in slides" :key="banner.key">
        <NtmBanner :banner="banner"/>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<script setup>
import Swiper from 'Swiper/vue'

const slides = [
  {
    key: 'b1',
    src: '/assets/img/landing/slider/b1.jpg',
  },
  {
    key: 'b2',
    src: '/assets/img/landing/slider/b2.jpg',
  },
  {
    key: 'b3',
    src: '/assets/img/landing/slider/b3.jpg',
  },
  {
    key: 'b4',
    src: '/assets/img/landing/slider/b4.jpg',
  },
  {
    key: 'b5',
    src: '/assets/img/landing/slider/b5.jpg',
  },
];
</script>
