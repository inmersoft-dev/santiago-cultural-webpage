/* eslint-disable react/function-component-definition */
import { useEffect } from "react";
import axios from "axios";

// @mui components
import { Box } from "@mui/material";

// contexts
import { useRoute } from "context/RouterProvider";

// own components
import GridItem from "components/GridItem/GridItem";
import ItemGrid from "components/ItemGrid/ItemGrid";
import Search from "./Search/Search";

const News = () => {
  const url = "https://trinidad-dashboard-server.herokuapp.com/";
  axios.post(`${url}/api/load/`);
  const { setRouteState } = useRoute();

  const items = [
    <ItemGrid />,
    <ItemGrid />,
    <ItemGrid />,
    <ItemGrid />,
    <ItemGrid />,
    <ItemGrid />,
  ];

  useEffect(() => {
    setRouteState({ type: "set", to: 4 });
  }, []);

  return (
    <Box>
      <Search />
      <GridItem content={items} />
    </Box>
  );
};

export default News;
