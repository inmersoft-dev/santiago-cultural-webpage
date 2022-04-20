/* eslint-disable react/function-component-definition */
import { useEffect } from "react";

// @mui components
import { Box } from "@mui/material";

// layouts
import Hero from "layouts/Hero/Hero";
import Search from "components/Search/Search";

const News = () => {
  useEffect(() => {}, []);

  return (
    <Box>
      <Hero />
      <Search />
    </Box>
  );
};

export default News;
