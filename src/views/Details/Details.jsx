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
import LightBox from "components/LightBox/LightBox";

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
  const [lightBox, setLightBox] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [allImages, setAllImages] = useState([]);

  const imgSX = {
    objectFit: "cover",
    borderRadius: "1rem",
    cursor: "pointer",
  };

  const onLightBoxClose = () => {
    setLightBox(false);
  };

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
      const localAllImages = [];
      if (remoteData.headerImages)
        remoteData.headerImages.forEach((item) => localAllImages.push(item.url));
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
          localAllImages.push(item.url);
          imageList.push(
            <Box
              sx={{
                img: {
                  width: "300px",
                  height: "300px",
                  ...imgSX,
                },
              }}
              onClick={() => {
                setLightBox(true);
                if (remoteData.headerImage) setSelectedImage(i + 1);
                else setSelectedImage(i + remoteData.headerImages.length);
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
        console.log(localAllImages);
        setAllImages(localAllImages);
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
          padding: {
            lg: "10rem 10rem 50px 10rem",
            md: "100px 0",
            sm: "80px 60px 20px 60px",
            xs: "80px 20px 20px 20px",
          },
        }}
      >
        <Box sx={{ minHeight: "600px" }}>
          {loading === 0 && (
            <Container
              sx={{ width: { md: "90%", xs: "100%" }, flexDirection: { md: "row", xs: "column" } }}
            >
              {allImages.length && (
                <LightBox
                  index={selectedImage}
                  visible={lightBox}
                  onClose={onLightBoxClose}
                  images={[...allImages]}
                />
              )}

              <Container
                justify="center"
                sx={{
                  flexDirection: { md: "column", xs: "row" },
                  width: { md: "400px", xs: "100%" },
                  height: "100%",
                  padding: "25px",
                  img: {
                    width: { sm: "350px", xs: "285px" },
                    height: { sm: "350px", xs: "250px" },
                    ...imgSX,
                  },
                }}
              >
                <Container
                  extraProps={{
                    onClick: () => {
                      setLightBox(true);
                      setSelectedImage(0);
                    },
                  }}
                >
                  <Image
                    img={
                      object.headerImages && object.headerImages[0]
                        ? object.headerImages[0].url
                        : object.headerImage.url
                    }
                  />
                </Container>

                <Container
                  sx={{
                    flexWrap: "wrap",
                    display: { md: "flex", xs: "none" },
                    marginLeft: { md: "0", sm: "10px" },
                  }}
                >
                  {object.headerImages &&
                    object.headerImages.length > 0 &&
                    object.headerImages.map((item, i) => (
                      <Box
                        key={i}
                        onClick={() => {
                          setLightBox(true);
                          setSelectedImage(i);
                        }}
                        sx={{
                          img: {
                            width: { sm: "170px !important", xs: "137px !important" },
                            height: { sm: "172px !important", xs: "137px !important" },
                            marginTop: { md: "10px", xs: "0" },
                            marginRight: i % 2 === 0 ? "10px" : "0",
                          },
                        }}
                      >
                        {i > 0 && <Image img={item.url} />}
                      </Box>
                    ))}
                </Container>
              </Container>
              <Container sx={{ marginTop: "20px", flex: 1, flexDirection: "column" }}>
                {object.texts.title && <Typography variant="h4">{object.texts.title}</Typography>}
                {object.texts.subtitle && (
                  <Typography variant="subtitle1" sx={{ margin: "20px 0" }}>
                    {object.texts.subtitle}
                  </Typography>
                )}
                {object.texts.name && <Typography variant="h4">{object.texts.name}</Typography>}
                {object.texts.description && (
                  <Typography variant="subtitle1" sx={{ margin: "20px 0", textAlign: "justify" }}>
                    {object.texts.description}
                  </Typography>
                )}

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
              padding: { md: "40px 0", xs: "40px 0" },
              paddingLeft: { lg: "10rem", md: "40px", sm: "60px", xs: "20px" },
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
