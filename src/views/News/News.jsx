/* eslint-disable react/function-component-definition */
import { useEffect, useState } from "react";

// @mui components
import { Box, Typography, IconButton } from "@mui/material";

// @mui icons
import ReplayIcon from "@mui/icons-material/Replay";

// contexts
import { useLanguage } from "context/LanguageProvider";
import { useRoute } from "context/RouterProvider";

// services
import post from "services/post";

// own components
import Container from "components/Container/Container";
import GridItem from "components/GridItem/GridItem";
import ItemGrid from "components/ItemGrid/ItemGrid";
import Loading from "components/Loading/Loading";
import Search from "./Search/Search";

const News = () => {
  const { setRouteState } = useRoute();
  const { languageState } = useLanguage();

  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(1);

  const newsFilter = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const fetchNews = async () => {
    try {
      const { result } = await post("news");
      if (result.indexOf("Error") > -1 || !result) {
        // show an error :)
        setLoading(-1);
      } else {
        const items = [];
        result.forEach((item) => {
          const element = {
            headerImage: item.headerImage.url,
            id: item.id,
            texts: {
              title: item.texts.title,
              description: item.texts.content[0].value,
            },
          };
          items.push(element);
        });
        setNews(items);
        setLoading(0);
      }
    } catch (error) {
      console.log(error);
      setLoading(-1);
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
        id: item.id,
        type: "news",
        headerImage: item.headerImage,
        texts: {
          title: item.texts.title,
          description: item.texts.description,
        },
      };
      items.push(<ItemGrid element={element} />);
    });
    return items;
  };

  const reloadNews = async () => {
    setLoading(1);
    fetchNews();
  };

  useEffect(() => {
    reloadNews();
  }, []);

  useEffect(() => {
    setRouteState({ type: "set", to: 4 });
  }, []);

  return (
    <Box>
      <Search onChange={newsFilter} value={search} />
      <Container sx={{ minHeight: "500px" }}>
        {loading === 0 && <GridItem content={toRender()} />}
        {loading === -1 && (
          <Container justify="center" align="center" sx={{ height: "500px", width: "100%" }}>
            <Typography sx={{ marginRight: "20px" }}>
              {languageState.texts.Error.Connection}
            </Typography>
            <IconButton color="primary" onClick={reloadNews} variant="contained">
              <ReplayIcon />
            </IconButton>
          </Container>
        )}
        <Loading height="500px" visible={loading === 1} />
      </Container>
    </Box>
  );
};

export default News;
