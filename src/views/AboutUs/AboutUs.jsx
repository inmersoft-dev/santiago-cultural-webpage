/* eslint-disable react/function-component-definition */
import { useEffect } from "react";

// @mui components
import { Box } from "@mui/material";

// layouts
import Hero from "layouts/Hero/Hero";
import KnowUs from "components/KnowUs/KnowUs";

const AboutUs = () => {
  useEffect(() => {}, []);

  return (
    <Box>
      <Hero />
      <KnowUs />
    </Box>
  );
};

export default AboutUs;
