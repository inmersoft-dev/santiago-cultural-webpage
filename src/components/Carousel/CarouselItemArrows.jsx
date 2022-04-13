/* eslint-disable react/button-has-type */
/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import { Typography } from "@mui/material";
import React from "react";

import ImgArticle from "../../assets/images/home-decor-3.jpg";
// CSS Component CarouselItemArrows
import "./carousel-item-arrows.css";

const CarouselItemArrows = () => {
  return (
    <div className="car-item-arrows__container">
      <div className="car-item-arrows__left">
        <Typography variant="h4" mb={4}>
          Lorem ipsum dolor sit amet
        </Typography>

        <Typography variant="body1" mb={5}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
          dolor.
        </Typography>

        <button> Ver Producto</button>
      </div>
      <div className="car-item-arrows__right">
        <img src={ImgArticle} alt="Imagen" />
      </div>
    </div>
  );
};

export default CarouselItemArrows;
