/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/function-component-definition */
import { useEffect } from "react";

import Marquee from "react-fast-marquee";

// @mui components
import { Box, Typography, useTheme } from "@mui/material";

// own components
import ScrollView from "layouts/ScrollView/ScrollView";
import Card from "components/Card/Card";

// layouts
import Hero from "layouts/Hero/Hero";
import Carousel from "components/Carousel/Carousel";
import CarouselItemArrows from "components/Carousel/CarouselItemArrows";
import TabScrollView from "layouts/TabScrollView/TabScrollView";
// import Masonry from "layouts/Masonry/Masonry";
import CarouselItemDots from "components/Carousel/CarouselItemDots";
// import Masonry from "layouts/Masonry/Masonry";

// contexts
import { useLanguage } from "context/LanguageProvider";
import { useRoute } from "context/RouterProvider";

// images
import bruce from "assets/images/bruce-mars.jpg";

const Home = () => {
  const { setRouteState } = useRoute();
  const { languageState } = useLanguage();
  const theme = useTheme();

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
    setRouteState({ type: "set", to: 0 });
  }, []);

  return (
    <Box sx={{ background: theme.palette.secondary.main }}>
      <Hero />
      <ScrollView
        sx={{
          padding: { md: "40px 0", xs: "40px 20px" },
          paddingLeft: { md: "10rem", xs: "20px" },
        }}
        title={languageState.texts.Home.Subtitles[0]}
        content={cards}
      />
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
      <Carousel
        CarouselItem={<CarouselItemDots colorColum={theme.palette.secondary.carousel} />}
        navigation={false}
        pagination={true}
        backgroundColor={theme.palette.secondary.dark}
      />
      {/* <Masonry /> */}
    </Box>
  );
};

export default Home;
