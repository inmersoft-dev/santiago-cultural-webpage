/* eslint-disable react/function-component-definition */
import { useEffect } from "react";

// @mui components
import { Box } from "@mui/material";

// contexts
import { useRoute } from "context/RouterProvider";

// own components
import GridItem from "components/GridItem/GridItem";
import ItemGrid from "components/ItemGrid/ItemGrid";
import Search from "./Search/Search";
import post from "../../services/post";

const News = () => {
  const { setRouteState } = useRoute();

  const fetchNews = async () => {
    const news = await post("news");
    console.log(news);
  };

  fetchNews();

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
