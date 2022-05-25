/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */ /* eslint-disable react/function-component-definition */
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Image from "components/Image/Image";

import ImgCarouselDots from "../../assets/images/ivana-square.jpg";

// Import Css of Component
import "./carousel-item-dots.css";

// eslint-disable-next-line react/prop-types
const CarouselItemDots = ({ colorColum }) => {
  return (
    <Box className="carousel-item-dots__container">
      <Box className="carousel-item-dots__wrapper" sx={{ display: { lg: "none", xs: "flex" } }}>
        <Box className="carousel-item-dots__left">
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
            dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur.Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur
          </Typography>
        </Box>
        <Box className="carousel-item-dots__center">
          <Box
            className="carousel-item-dots__center-img-container"
            sx={{
              img: {
                width: "100% !important",
                height: "100% !important",
              },
            }}
          >
            <Image
              img={ImgCarouselDots}
              style={{
                borderRadius: "10px",
              }}
            />
          </Box>
        </Box>
      </Box>
      <Box className="carousel-item-dots__left" sx={{ display: { lg: "flex", xs: "none" } }}>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
          dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
          nascetur.Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
          nascetur
        </Typography>
      </Box>
      <Box className="carousel-item-dots__center" sx={{ display: { lg: "flex", xs: "none" } }}>
        <Box
          className="carousel-item-dots__center-img-container"
          sx={{
            img: {
              width: "100% !important",
              height: "100% !important",
            },
          }}
        >
          <Image
            img={ImgCarouselDots}
            style={{
              borderRadius: "10px",
            }}
          />
        </Box>
      </Box>
      <Box className="carousel-item-dots__right" sx={{ backgroundColor: colorColum }}>
        <Typography variant="body1">Lorem ipsum dolor sit amet</Typography>
        <Typography variant="body1">Lorem ipsum dolor sit amet</Typography>
        <Typography variant="body1">Lorem ipsum dolor sit amet</Typography>
        <Button
          className="carousel-item-dots__right-button"
          variant="contained"
          sx={{ mt: { md: 4, xs: 2 } }}
        >
          Ver Producto
        </Button>
      </Box>
    </Box>
  );
};

export default CarouselItemDots;
