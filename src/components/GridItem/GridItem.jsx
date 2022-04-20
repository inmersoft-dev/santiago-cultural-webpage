/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import { Box, Typography } from "@mui/material";
import ItemGrid from "components/ItemGrid/ItemGrid";
import React from "react";

// Import css Componet
import "./grid-item.css";

const items = [1, 2, 3, 4, 5, 6, 7, 8];

const GridItem = () => {
  return (
    <Box className="grid-item__container">
      <Typography variant="body1" sx={{ ml: "2rem" }}>
        20 Resultados
      </Typography>
      <Box className="grid-item__items-container">
        {items.map((i) => (
          <ItemGrid key={i} />
        ))}
      </Box>
    </Box>
  );
};

export default GridItem;
