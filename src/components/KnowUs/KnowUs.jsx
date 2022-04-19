/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */

import { Box, Divider, Typography, useTheme } from "@mui/material";
import React from "react";
import ApiIcon from "@mui/icons-material/Api";
import misionImg from "../../assets/images/ivana-squares.jpg";

// Import CSS Component
import "./know-us.css";

const KnowUs = () => {
  const theme = useTheme();
  return (
    <Box
      className="know-us__container"
      sx={{
        backgroundColor: theme.palette.secondary.main,
        /* padding: { md: "4rem 0 8rem 10rem", sm: "4rem 0 8rem 6rem", xs: "4rem 1rem 8rem 1rem" }, */
      }}
    >
      <div className="know-us__texts-container">
        <Typography variant="h4" sx={{ color: theme.palette.primary.main }}>
          Title Title
        </Typography>
        <Divider
          sx={{
            borderWidth: " 1px",
            borderStyle: "solid",
            borderColor: "#ffd8a3",
            width: "80px",
            mb: 2,
          }}
        />
        <Typography
          variant="body1"
          sx={{ width: { md: "40vw", xs: "60vw" }, color: theme.palette.primary.light }}
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
          dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
          nascetur
        </Typography>
      </div>
      <div className="know-us__images-container">
        <Box
          className="know-us__images-container-img"
          sx={{
            backgroundImage: `url(${misionImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Box
            className="know-us__images-text-container"
            sx={{ padding: { md: "5rem", /* sm: "4rem", */ xs: "4rem" } }}
          >
            <Typography className="know-us__title-section" variant="h4" sx={{ mb: 2 }}>
              <ApiIcon /> Mision
            </Typography>
            <Typography variant="body1" className="know-us__text-section1">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
              dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur
            </Typography>
          </Box>
        </Box>
        <Box
          className="know-us__container-text"
          sx={{ backgroundColor: theme.palette.warning.main, padding: { md: "5rem", xs: "4rem" } }}
        >
          <Box
            className="know-us__container-text-container"
            /* sx={{ padding: { md: "5rem", xs: "2rem" } }} */
          >
            <Typography className="know-us__title-section" variant="h4" sx={{ mb: 2 }}>
              <ApiIcon /> Mision
            </Typography>
            <Typography variant="body1" className="know-us__text-section2">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
              dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur
            </Typography>
          </Box>
        </Box>
      </div>
    </Box>
  );
};

export default KnowUs;
