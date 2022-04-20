/* eslint-disable react/function-component-definition */
import { useEffect } from "react";

// @mui components
import { Box } from "@mui/material";

// layouts
import Hero from "layouts/Hero/Hero";
import KnowUs from "components/KnowUs/KnowUs";
import OurValues from "components/OurValues/OurValues";

const AboutUs = () => {
  useEffect(() => {}, []);

  return (
    <Box>
      <Hero height="75vh" />
      <KnowUs />
      <OurValues />
    </Box>
  );
};

export default AboutUs;
