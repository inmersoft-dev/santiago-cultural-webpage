/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import { Box, Typography } from "@mui/material";
import React from "react";

// Import css Componet
import "./grid-item.css";

const GridItem = () => {
  return (
    <Box className="grid-item__container">
      <Typography variant="body1">20 Resultados</Typography>
      <Box className="grid-item__items-container">
        <Typography variant="body1">Aqui va texto</Typography>
      </Box>
    </Box>
  );
};

export default GridItem;
