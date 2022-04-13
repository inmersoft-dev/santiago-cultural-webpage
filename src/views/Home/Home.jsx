/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/function-component-definition */
import { useEffect } from "react";

// @mui components
import { Box } from "@mui/material";

// layouts
import Hero from "layouts/Hero/Hero";
import Carousel from "components/Carousel/Carousel";
import CarouselItemArrows from "components/Carousel/CarouselItemArrows";

const Home = () => {
  useEffect(() => {}, []);

  return (
    <Box>
      <Hero />
      <Carousel CarouselItem={<CarouselItemArrows />} navigation={true} />
    </Box>
  );
};

export default Home;
