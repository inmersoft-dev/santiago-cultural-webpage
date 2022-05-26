/* eslint-disable react/button-has-type */
/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import { Box, Typography } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import Image from "components/Image/Image";

import ImgArticle from "../../assets/images/home-decor-3.jpg";
// CSS Component CarouselItemArrows
import "./carousel-item-arrows.css";

const CarouselItemArrows = () => {
  return (
    <Box className="car-item-arrows__container">
      <Box className="car-item-arrows__left">
        <Box className="car-item-arrows__left-text-container">
          <Typography variant="h4" mb={4}>
            Lorem ipsum dolor sit amet
          </Typography>

          <Typography variant="body1" mb={5}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
            dolor.
          </Typography>
          <Button variant="contained">Ver Producto</Button>
        </Box>
      </Box>
      <Box className="car-item-arrows__right">
        <Box
          className="car-item-arrows__right-img-container"
          sx={{
            img: { width: "100% !important", height: "100% !important" },
            position: { md: "relative", xs: "absolute" },
          }}
        >
          <Image img={ImgArticle} style={{ objectFit: "cover" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default CarouselItemArrows;
