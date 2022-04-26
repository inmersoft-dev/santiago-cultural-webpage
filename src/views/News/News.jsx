/* eslint-disable react/function-component-definition */
import { useEffect, useState } from "react";

// @mui components
import { Box } from "@mui/material";

// contexts
import { useRoute } from "context/RouterProvider";

// own components
import GridItem from "components/GridItem/GridItem";
import ItemGrid from "components/ItemGrid/ItemGrid";
import Loading from "components/Loading/Loading";
import Search from "./Search/Search";
import post from "../../services/post";

const News = () => {
  const { setRouteState } = useRoute();

  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    const data = await post("news");
    console.log(data);
    const items = [];
    data.result.forEach((item) => {
      items.push(<ItemGrid element={item} />);
    });
    setNews(items);
  };

  useEffect(() => {
    fetchNews();
  }, []);
  console.log(news);

  /* const items = [
    <ItemGrid />,
    <ItemGrid />,
    <ItemGrid />,
    <ItemGrid />,
    <ItemGrid />,
    <ItemGrid />,
  ]; */

  useEffect(() => {
    setRouteState({ type: "set", to: 4 });
  }, []);

  return (
    <Box>
      <Search />
      {news.length > 0 ? <GridItem content={news} /> : <Loading visible />}
    </Box>
  );
};

export default News;
