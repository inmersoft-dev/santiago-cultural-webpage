/* eslint-disable react/no-array-index-key */
/* eslint-disable react/function-component-definition */
import { useEffect } from "react";

// @mui components
import { Box, Typography, useTheme } from "@mui/material";

// own components
import ScrollView from "layouts/ScrollView/ScrollView";
import Card from "components/Card/Card";

// layouts
import Hero from "layouts/Hero/Hero";
import TabScrollView from "layouts/TabScrollView/TabScrollView";

// contexts
import { useLanguage } from "context/LanguageProvider";

// images
import bruce from "assets/images/bruce-mars.jpg";

const Home = () => {
  const { languageState } = useLanguage();
  const theme = useTheme();

  const cards = [
    <Card route="/home" img={bruce} imageProps={{ alt: "bruce" }}>
      <Typography color="secondary" sx={{ fontWeight: "500" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
    </Card>,
    <Card route="/home" img={bruce} imageProps={{ alt: "bruce" }}>
      <Typography color="secondary" sx={{ fontWeight: "500" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
    </Card>,
    <Card route="/home" img={bruce} imageProps={{ alt: "bruce" }}>
      <Typography color="secondary" sx={{ fontWeight: "500" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
    </Card>,
    <Card route="/home" img={bruce} imageProps={{ alt: "bruce" }}>
      <Typography color="secondary" sx={{ fontWeight: "500" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
    </Card>,

    <Card route="/home" img={bruce} imageProps={{ alt: "bruce" }}>
      <Typography color="secondary" sx={{ fontWeight: "500" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
    </Card>,

    <Card route="/home" img={bruce} imageProps={{ alt: "bruce" }}>
      <Typography color="secondary" sx={{ fontWeight: "500" }}>
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
      <TabScrollView />
      <Box
        sx={{
          padding: "40px 0",
          paddingLeft: { md: "10rem", xs: "40px" },
          background: theme.palette.primary.light,
        }}
      >
        <Box>
          <Typography variant="h5">{languageState.texts.Home.Subtitles[0]}</Typography>
        </Box>
        <ScrollView
          sx={{ padding: "40px 0", paddingLeft: { md: "40px", xs: "0" } }}
          title={languageState.texts.Home.Subtitles[0]}
          content={cards}
        />
      </Box>
    </Box>
  );
};

export default Home;
