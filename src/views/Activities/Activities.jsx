/* eslint-disable react/function-component-definition */
import { useEffect } from "react";

// @mui components
import { Box } from "@mui/material";

// layouts
import Hero from "layouts/Hero/Hero";
import MapFilter from "layouts/MapFilter/MapFilter";

const Activities = () => {
  useEffect(() => {}, []);

  return (
    <Box>
      <Hero />
      <MapFilter />
    </Box>
  );
};

export default Activities;
