/* eslint-disable react/function-component-definition */
import { useEffect } from "react";

// @mui components
import { Box } from "@mui/material";

// layouts
import Hero from "layouts/Hero/Hero";
import KnowUs from "components/KnowUs/KnowUs";
import OurValues from "components/OurValues/OurValues";

// contexts
import { useRoute } from "context/RouterProvider";

// images
import bg2 from "assets/images/bg2.jpg";

const AboutUs = () => {
  const { setRouteState } = useRoute();

  useEffect(() => {}, []);

  useEffect(() => {
    setRouteState({ type: "set", to: 1 });
  }, []);

  return (
    <Box>
      <Hero sx={{ height: "75vh" }} bg={bg2} />
      <KnowUs />
      <OurValues />
    </Box>
  );
};

export default AboutUs;
