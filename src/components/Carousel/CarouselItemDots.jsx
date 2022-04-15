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
        <div className="carousel-item-dots__center-img-container">
          <Image
            img={ImgCarouselDots}
            width="100%"
            height="100%"
            style={{
              borderRadius: "10px",
            }}
          />
        </div>
      </div>
      <Box
        className="carousel-item-dots__right"
        sx={{ backgroundColor: theme.palette.primary.dark }}
      >
        <Typography variant="body1">Lorem ipsum dolor sit amet</Typography>
        <Typography variant="body1">Lorem ipsum dolor sit amet</Typography>
        <Typography variant="body1">Lorem ipsum dolor sit amet</Typography>
        <Button
          className="carousel-item-dots__right-button"
          variant="contained"
          sx={{ mt: { md: 8, xs: 2 } }}
        >
          Ver Producto
        </Button>
      </Box>
    </div>
  );
};

export default CarouselItemDots;
