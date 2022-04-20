/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import { Box, Typography, Divider, useTheme } from "@mui/material";
import ValueItem from "components/ValueItem/ValueItem";
import React from "react";

// Import Css of component
import "./our-values.css";

const values = [1, 2, 3, 4, 5, 6];

const OurValues = () => {
  const theme = useTheme();
  return (
    <Box className="our-values__container" sx={{ backgroundColor: theme.palette.primary.main }}>
      <Box className="our-values__title-container">
        <Typography
          variant="h4"
          sx={{ color: theme.palette.secondary.main, fontWeight: "bold", textAlign: "center" }}
        >
          Nuestros Valores
        </Typography>
        <Divider
          sx={{
            borderWidth: " 1px",
            borderStyle: "solid",
            borderColor: "#ffd8a3",
            width: "150px",
            mb: 2,
          }}
        />
      </Box>
      <Box className="our-values__values-items-container">
        {values.map((i) => (
          <ValueItem key={i} />
        ))}
      </Box>
    </Box>
  );
};

export default OurValues;
