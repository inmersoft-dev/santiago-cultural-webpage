/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import ApiIcon from "@mui/icons-material/Api";
// Import Css of component
import "./value-item.css";

const ValueItem = () => {
  const theme = useTheme();
  return (
    <Box className="value-item__container">
      <div className="value-item__icon-container">
        <ApiIcon />
      </div>
      <div className="value-item__text-container">
        <Typography
          variant="h5"
          sx={{ color: theme.palette.secondary.main, fontWeight: "bold", mb: 2 }}
        >
          Title
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
          dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
          nascetur
        </Typography>
      </div>
    </Box>
  );
};

export default ValueItem;
