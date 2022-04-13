/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
/* eslint-disable import/no-unresolved */
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// CSS
import "./carousel.css";

const Carousel = ({ CarouselItem, navigation }) => {
  return (
    <div className="carousel__container">
      <Swiper
        // install Swiper modules
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={navigation}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide> {CarouselItem} </SwiperSlide>
        <SwiperSlide> {CarouselItem} </SwiperSlide>
        <SwiperSlide> {CarouselItem} </SwiperSlide>
        <SwiperSlide> {CarouselItem} </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
