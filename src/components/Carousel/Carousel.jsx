/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
/* eslint-disable import/no-unresolved */
import React from "react";

// Import Material Ui Component
import Box from "@mui/material/Box";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// CSS
import "./carousel.css";

const Carousel = ({ CarouselItem, navigation, backgroundColor, pagination }) => {
  return (
    <Box
      className="carousel__container"
      sx={{
        backgroundColor: { backgroundColor },
        padding: { lg: "0 7rem", md: "0 3rem", xs: "0 2rem 0 2rem" },
      }}
    >
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        loop
        navigation={navigation}
        pagination={pagination}
        scrollbar={{ draggable: true }}
        /* onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")} */
      >
        <SwiperSlide> {CarouselItem} </SwiperSlide>
        <SwiperSlide> {CarouselItem} </SwiperSlide>
        <SwiperSlide> {CarouselItem} </SwiperSlide>
        <SwiperSlide> {CarouselItem} </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Carousel;
