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
    <Box>
      <Hero />
      <ScrollView title={languageState.texts.Home.Subtitles[0]} content={cards} />
      <Box
        sx={{ padding: "40px 0", paddingLeft: "10rem", background: theme.palette.primary.light }}
      >
        <Box>
          <Typography variant="h5">{languageState.texts.Home.Subtitles[0]}</Typography>
        </Box>
        <ScrollView
          sx={{ paddingLeft: "20px" }}
          title={languageState.texts.Home.Subtitles[0]}
          content={cards}
        />
      </Box>
    </Box>
  );
};

export default Home;
