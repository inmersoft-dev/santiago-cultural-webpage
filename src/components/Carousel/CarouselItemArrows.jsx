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
    <div className="car-item-arrows__container">
      <div className="car-item-arrows__left">
        <div className="car-item-arrows__left-text-container">
          <Typography variant="h4" mb={4}>
            Lorem ipsum dolor sit amet
          </Typography>

          <Typography variant="body1" mb={5}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
            dolor.
          </Typography>
          <Button variant="contained">Ver Producto</Button>
        </div>
      </div>
      <div className="car-item-arrows__right">
        <Box className="car-item-arrows__right-img-container" sx={{position:{md:"relative", xs:"absolute"}}}>
          <Image img={ImgArticle} height="100%" width="100%" style={{ objectFit: "cover" }} />
        </Box>
      </div>
    </div>
  );
};

export default CarouselItemArrows;
