/* eslint-disable react/no-array-index-key */
/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// @mui icons
import ReplayIcon from "@mui/icons-material/Replay";

// @mui components
import { Typography, IconButton, Box, useTheme } from "@mui/material";

// own components
import ScrollView from "layouts/ScrollView/ScrollView";
import Container from "components/Container/Container";
import Loading from "components/Loading/Loading";
import Image from "components/Image/Image";
import Card from "components/Card/Card";
import HtmlEditor from "components/HtmlEditor/HtmlEditor";

// services
import { loadFromServerGet } from "services/get";
import post from "services/post";

// contexts
import { useLanguage } from "context/LanguageProvider";
import { useRoute } from "context/RouterProvider";

const Details = () => {
  const { data } = useParams();
  const theme = useTheme();

  const { languageState } = useLanguage();
  const { setRouteState } = useRoute();

  const [loading, setLoading] = useState(1);

  const [object, setObject] = useState({});

  const init = async () => {
    const params = data.substring(1).split("-");

    const id = params[0];
    const collection = params[1];
    try {
      const remoteData = await loadFromServerGet(
        "api/load/get",
        collection,
        id,
        languageState.language
      );
      const transformedContent = [];
      let imageList = [];
      remoteData.texts.content.forEach((item, i) => {
        if (item.type === "text") {
          if (imageList.length > 1) {
            transformedContent.push({
              type: "carousel",
              imageList,
            });
            imageList = [];
          } else transformedContent.push(item);
        } else {
          imageList.push(
            <Box
              sx={{
                img: {
                  width: "300px",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "1rem",
                },
              }}
            >
              <Image img={item.url} />
            </Box>
          );
          if (i === remoteData.texts.content.length - 1 && imageList.length === 1)
            transformedContent.push(item);
          else if (i === remoteData.texts.content.length - 1)
            transformedContent.push({
              type: "carousel",
              imageList,
            });
        }
      });
      remoteData.texts.content = [...transformedContent];
      if (remoteData.error) {
        setLoading(-1);
      } else {
        setObject(remoteData);
        setLoading(0);
      }
    } catch (e) {
      console.log(e);
      setLoading(-1);
    }
  };

  const reload = () => {
    setLoading(1);
    init();
  };

  useEffect(() => {
    init();
  }, []);

  const [news, setNews] = useState([]);
  const [loadingNews, setLoadingNews] = useState(1);

  const fetchNews = async () => {
    try {
      const { result } = await post("news");
      if (result.indexOf("Error") > -1 || !result) {
        // show an error :)
        setLoadingNews(-1);
      } else {
        const items = [];
        result.forEach((item) => {
          const element = (
            <Card route="/home" img={item.headerImage.url} imageProps={{ alt: "bruce" }}>
              <Typography
                color="secondary"
                sx={{
                  fontWeight: 600,
                  color: theme.palette.secondary.main,
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                {item.texts.title}
              </Typography>
            </Card>
          );

          items.push(element);
        });
        setNews(items);
        setLoadingNews(0);
      }
    } catch (error) {
      console.log(error);
      setLoadingNews(-1);
    }
  };

  const reloadNews = async () => {
    setLoadingNews(1);
    fetchNews();
  };

  useEffect(() => {
    setRouteState({ type: "set", to: -1 });
    reloadNews();
  }, []);

  return (
    <Container
      sx={{
        width: "100vw",
        flexDirection: "column",
      }}
    >
      <Loading visible={loading === 1} />
      <Container
        sx={{
          padding: { md: "100px 0", xs: "80px 20px" },
          paddingLeft: { md: "10rem", xs: "20px" },
          paddingBottom: "20px",
        }}
      >
        <Box sx={{ minHeight: "600px" }}>
          {loading === 0 && (
            <Container sx={{ width: { lg: "80%", md: "90%" } }}>
              <Container
                sx={{
                  width: " 400px",
                  height: "100%",
                  padding: "25px",
                  img: {
                    width: "350px",
                    height: "350px",
                    objectFit: "cover",
                    borderRadius: "1rem",
                  },
                }}
              >
                <Image img={object.headerImage.url} />
              </Container>
              <Container sx={{ marginTop: "20px", flex: 1, flexDirection: "column" }}>
                <Typography variant="h5">{object.texts.title}</Typography>
                <Typography variant="subtitle1" sx={{ marginBottom: "20px" }}>
                  {object.texts.subtitle}
                </Typography>
                {object.texts.content.map((item, i) => (
                  <Container key={`${i}`}>
                    {item.type === "text" && (
                      <Box>
                        <HtmlEditor value={item.value} />
                      </Box>
                    )}
                    {item.type === "carousel" && (
                      <ScrollView
                        sx={{ padding: 0, paddingLeft: 0 }}
                        title=""
                        empty=""
                        content={item.imageList}
                      />
                    )}
                  </Container>
                ))}
              </Container>
            </Container>
          )}
          {loading === -1 && (
            <Container justify="center" align="center" sx={{ height: "500px", width: "100%" }}>
              <Typography sx={{ marginRight: "20px" }}>
                {languageState.texts.Error.Connection}
              </Typography>
              <IconButton color="primary" onClick={reload} variant="contained">
                <ReplayIcon />
              </IconButton>
            </Container>
          )}
        </Box>
      </Container>
      <Box sx={{ height: "428px", width: "100vw" }}>
        <Loading height="428px" visible={loadingNews === 1} />
        {loadingNews === 0 && (
          <ScrollView
            sx={{
              padding: { md: "40px 0", xs: "40px 20px" },
              paddingLeft: { md: "10rem", xs: "20px" },
            }}
            title={languageState.texts.Home.Subtitles[0]}
            empty={languageState.texts.Error.NoNews}
            content={news}
          />
        )}
        {loadingNews === -1 && (
          <Container justify="center" align="center" sx={{ height: "100%" }}>
            <Typography sx={{ marginRight: "20px" }}>
              {languageState.texts.Error.Connection}
            </Typography>
            <IconButton color="primary" onClick={reloadNews} variant="contained">
              <ReplayIcon />
            </IconButton>
          </Container>
        )}
      </Box>
    </Container>
  );
};

export default Details;
