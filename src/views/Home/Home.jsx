/* eslint-disable react/no-array-index-key */
/* eslint-disable react/function-component-definition */
import { useEffect } from "react";

// @mui components
import { Box, Typography } from "@mui/material";

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

  const cards = [
    <Card route="/home" img={bruce} imageProps={{ height: "200", alt: "bruce" }}>
      <Typography color="secondary" sx={{ fontWeight: "500" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
    </Card>,
    <Card route="/home" img={bruce} imageProps={{ height: "200", alt: "bruce" }}>
      <Typography color="secondary" sx={{ fontWeight: "500" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
    </Card>,
    <Card route="/home" img={bruce} imageProps={{ height: "200", alt: "bruce" }}>
      <Typography color="secondary" sx={{ fontWeight: "500" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
    </Card>,
    <Card route="/home" img={bruce} imageProps={{ height: "200", alt: "bruce" }}>
      <Typography color="secondary" sx={{ fontWeight: "500" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
    </Card>,

    <Card route="/home" img={bruce} imageProps={{ height: "200", alt: "bruce" }}>
      <Typography color="secondary" sx={{ fontWeight: "500" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
    </Card>,

    <Card route="/home" img={bruce} imageProps={{ height: "200", alt: "bruce" }}>
      <Typography color="secondary" sx={{ fontWeight: "500" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
    </Card>,
  ];

  useEffect(() => {}, []);

  return (
    <Box>
      <Hero />
      <Box>
        <ScrollView title={languageState.texts.Home.Subtitles[0]} content={cards} />
      </Box>
    </Box>
  );
};

export default Home;
