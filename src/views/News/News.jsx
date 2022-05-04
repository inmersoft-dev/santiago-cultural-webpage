/* eslint-disable react/function-component-definition */
import { useEffect, useState } from "react";

// @mui components
import { Box } from "@mui/material";

// contexts
import { useRoute } from "context/RouterProvider";

// Import Components
// import { FullModal } from "../FullModal/FullModal";

// own components
import Container from "components/Container/Container";
import GridItem from "components/GridItem/GridItem";
import ItemGrid from "components/ItemGrid/ItemGrid";
import Loading from "components/Loading/Loading";
import Search from "./Search/Search";

// services
import post from "../../services/post";

const News = () => {
  const { setRouteState } = useRoute();

  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");

  const newsFilter = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const fetchNews = async () => {
    try {
      const { result } = await post("news");
      if (result.indexOf("Error") > -1 || !result) {
        // show an error :)
      } else {
        const items = [];
        result.forEach((item) => {
          const element = {
            headerImage: item.headerImage.url,
            texts: {
              title: item.texts.title,
              description: item.texts.content[0].value,
            },
          };
          items.push(element);
        });
        setNews(items);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const filter = (item) => {
    if (item.texts.title.indexOf(search) > -1 || item.texts.description.indexOf(search) > -1)
      return item;
    return null;
  };

  const toRender = () => {
    const items = [];
    const filteredNews = news.filter(filter);
    filteredNews.forEach((item) => {
      const element = {
        headerImage: item.headerImage.url,
        texts: {
          title: item.texts.title,
          description: item.texts.content[0].value,
        },
      };
      items.push(<ItemGrid element={element} />);
    });
    return items;
  };

  useEffect(() => {
    fetchNews();
  }, []);

  useEffect(() => {
    setRouteState({ type: "set", to: 4 });
  }, []);

  return (
    <Box>
      <Search onChange={newsFilter} value={search} />
      <Container sx={{ minHeight: "500px" }}>
        <GridItem content={toRender()} />
        <Loading visible={news.length > 0 ? 0 : 1} />
      </Container>
    </Box>
  );
};

export default News;
