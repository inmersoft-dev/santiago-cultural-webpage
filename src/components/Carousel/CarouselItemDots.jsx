/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */ /* eslint-disable react/function-component-definition */
import { Box, Button, Typography, useTheme } from "@mui/material";
import React from "react";
import Image from "components/Image/Image";

import ImgCarouselDots from "../../assets/images/ivana-square.jpg";

// Import Css of Component
import "./carousel-item-dots.css";

const CarouselItemDots = () => {
  const theme = useTheme();

  return (
    <div className="carousel-item-dots__container">
      <div className="carousel-item-dots__left">
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
          dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
          nascetur
        </Typography>
      </div>
      <div className="carousel-item-dots__center">
        <Image
          img={ImgCarouselDots}
          width="300"
          height="300"
          style={{ borderRadius: "10px", position: "absolute", top: "108px" }}
        />
        {/*  <img src={ImgCarouselDots} alt="Imagen" /> */}
      </div>
      <Box
        className="carousel-item-dots__right"
        sx={{ backgroundColor: theme.palette.primary.dark }}
      >
        <Typography variant="body1">Lorem ipsum dolor sit amet</Typography>
        <Typography variant="body1">Lorem ipsum dolor sit amet</Typography>
        <Typography variant="body1">Lorem ipsum dolor sit amet</Typography>
        <Button className="carousel-item-dots__right-button" variant="contained" sx={{ mt: 8 }}>
          Ver Producto
        </Button>
      </Box>
    </div>
  );
};

export default CarouselItemDots;
