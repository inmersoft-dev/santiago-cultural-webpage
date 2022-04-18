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
    <Box className="know-us__container">
      <div className="know-us__texts-container">
        <Typography variant="h4">Title Title</Typography>
        <Divider
          sx={{ borderWidth: " 1px", borderStyle: "solid", borderColor: "#f8ca83", width: "80px" }}
        />
        <Typography variant="body1">
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
          }}
        >
          <Box className="know-us__images-text-container">
            <Typography variant="h4">
              <ApiIcon /> Mision
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
              dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur
            </Typography>
          </Box>
        </Box>
        <Box
          className="know-us__container-text"
          sx={{ backgroundColor: theme.palette.warning.main }}
        >
          <Typography variant="h4">
            <ApiIcon /> Mision
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
            dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur
          </Typography>
        </Box>
      </div>
    </Box>
  );
};

export default KnowUs;
