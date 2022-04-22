/* eslint-disable react/function-component-definition */
import { useEffect } from "react";

// @mui components
import { Box } from "@mui/material";

// layouts
import GridItem from "components/GridItem/GridItem";

// contexts
import { useRoute } from "context/RouterProvider";

// own components
import Search from "./Search/Search";

const News = () => {
  const { setRouteState } = useRoute();

  useEffect(() => {
    setRouteState({ type: "set", to: 4 });
  }, []);

  return (
    <Box>
      <Search />
      <GridItem />
    </Box>
  );
};

export default News;
