import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import SwiperCore, { Autoplay, Controller } from 'swiper';
import { useState } from 'react';
import 'swiper/css/controller';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper';

import classes from './Slider.module.scss';

const Slider = () => {
  SwiperCore.use([Autoplay]);

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
  const Banner = (props: any) => {
    return (
      <div className="product-carousel gap-1">
        <div className={`${classes.box} flex h-full w-full justify-center`}>
          <img className={classes.img} src={props.banner.src} />
        </div>
      </div>
    );
  };

  const productCarousel = (
    <Swiper
      modules={[Keyboard, Navigation, Autoplay]}
      slidesPerView={1}
      centeredSlides={false}
      grabCursor={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      keyboard={{
        enabled: true,
      }}
      navigation
      autoplay={{ delay: 3000 }}
      className="mySwiper"
    >
      {slides.map((banner) => (
        <SwiperSlide key={banner.key}>
          <Banner banner={banner} />
        </SwiperSlide>
      ))}
    </Swiper>
  );

  return <div className="products-sweeper w-full">{productCarousel}</div>;
};

export default Slider;
