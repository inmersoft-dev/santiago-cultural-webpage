/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/function-component-definition */
import { useEffect } from "react";

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
import Masonry from "layouts/Masonry/Masonry";

// contexts
import { useLanguage } from "context/LanguageProvider";

// images
import bruce from "assets/images/bruce-mars.jpg";

const Home = () => {
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

  useEffect(() => {}, []);

  return (
    <Box sx={{ background: theme.palette.secondary.main }}>
      <Hero />
      <ScrollView
        sx={{
          padding: { md: "40px 0", xs: "40px 40px" },
          paddingLeft: { md: "10rem", xs: "40px" },
        }}
        title={languageState.texts.Home.Subtitles[0]}
        content={cards}
      />
      <Carousel
        CarouselItem={<CarouselItemArrows />}
        navigation={false}
        pagination={true}
        backgroundColor={theme.palette.primary.light}
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
          paddingLeft: { md: "10rem", xs: "40px" },
          background: theme.palette.primary.light,
        }}
      >
        <Box>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            {languageState.texts.Home.Subtitles[0]}
          </Typography>
        </Box>
        <ScrollView
          sx={{ padding: "40px 0", paddingLeft: { md: "40px", xs: "0" } }}
          title={languageState.texts.Home.Subtitles[0]}
          content={cards}
        />
      </Box>
      <Masonry />
    </Box>
  );
};

export default Home;
