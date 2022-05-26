/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/function-component-definition */
import { useEffect, useState } from "react";

import Marquee from "react-fast-marquee";

// @mui components
import { Box, Typography, useTheme, IconButton } from "@mui/material";

// @mui icons
import ReplayIcon from "@mui/icons-material/Replay";

// own components
import Container from "components/Container/Container";
import ScrollView from "layouts/ScrollView/ScrollView";
import Card from "components/Card/Card";

// layouts
import Hero from "layouts/Hero/Hero";
import Carousel from "components/Carousel/Carousel";
import CarouselItemArrows from "components/Carousel/CarouselItemArrows";
import TabScrollView from "layouts/TabScrollView/TabScrollView";
import CarouselItemDots from "components/Carousel/CarouselItemDots";
import Loading from "components/Loading/Loading";

// contexts
import { useLanguage } from "context/LanguageProvider";
import { useRoute } from "context/RouterProvider";

// images
import bg1 from "assets/images/bg1.jpg";
import bruce from "assets/images/bruce-mars.jpg";

// services
import post from "services/post";

const Home = () => {
  const { setRouteState } = useRoute();
  const { languageState } = useLanguage();
  const theme = useTheme();

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
            <Card
              route={`/details:${item.id}-news`}
              img={item.headerImage.url}
              imageProps={{ alt: "bruce" }}
              buttonText={languageState.texts.Home.ReadMore}
            >
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

  const cards = [
    <Card route="/home" img={bruce} imageProps={{ alt: "bruce" }}>
      <Typography color="secondary" sx={{ fontWeight: 600, color: theme.palette.secondary.main }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
    </Card>,
    <Card route="/home" img={bruce} imageProps={{ alt: "bruce" }}>
      <Typography color="secondary" sx={{ fontWeight: 600, color: theme.palette.secondary.main }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
    </Card>,
    <Card route="/home" img={bruce} imageProps={{ alt: "bruce" }}>
      <Typography color="secondary" sx={{ fontWeight: 600, color: theme.palette.secondary.main }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
    </Card>,
    <Card route="/home" img={bruce} imageProps={{ alt: "bruce" }}>
      <Typography color="secondary" sx={{ fontWeight: 600, color: theme.palette.secondary.main }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
    </Card>,

    <Card route="/home" img={bruce} imageProps={{ alt: "bruce" }}>
      <Typography color="secondary" sx={{ fontWeight: 600, color: theme.palette.secondary.main }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
    </Card>,

    <Card route="/home" img={bruce} imageProps={{ alt: "bruce" }}>
      <Typography color="secondary" sx={{ fontWeight: 600, color: theme.palette.secondary.main }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
    </Card>,
  ];

  useEffect(() => {
    fetchNews();
    setRouteState({ type: "set", to: 0 });
  }, []);

  return (
    <Box sx={{ background: theme.palette.secondary.main }}>
      <Hero bg={bg1} />
      <Box sx={{ height: "428px" }}>
        <Loading height="428px" width="100%" visible={loadingNews === 1} />
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

      <Marquee gradient={false} style={{ backgroundColor: theme.palette.warning.dark }} speed="100">
        <Typography variant="h1" sx={{ color: theme.palette.carousel.secondary, mx: 2 }}>
          Convocatorias
        </Typography>
      </Marquee>
      <Carousel
        CarouselItem={<CarouselItemDots colorColum={theme.palette.carousel.main} />}
        navigation={false}
        pagination={true}
        backgroundColor={theme.palette.carousel.secondary}
      />

      <TabScrollView />
      <Carousel
        CarouselItem={<CarouselItemArrows />}
        navigation={true}
        pagination={false}
        backgroundColor={theme.palette.secondary.carousel}
      />
      <Box
        sx={{
          padding: "40px 0",
          paddingLeft: { md: "10rem", xs: "20px" },
          background: theme.palette.primary.main,
        }}
      >
        <Box>
          <Typography variant="h4" sx={{ fontWeight: "bold", color: theme.palette.primary.light }}>
            {languageState.texts.Home.Subtitles[0]}
          </Typography>
        </Box>
        <ScrollView
          sx={{ padding: "40px 0", paddingLeft: { md: "40px", xs: "0" } }}
          title={languageState.texts.Home.Subtitles[0]}
          content={cards}
        />
      </Box>
      {/* <Carousel
        CarouselItem={<CarouselItemDots colorColum={theme.palette.secondary.carousel} />}
        navigation={false}
        pagination={true}
        backgroundColor={theme.palette.secondary.dark}
      /> */}
      {/* <Masonry /> */}
    </Box>
  );
};

export default Home;
