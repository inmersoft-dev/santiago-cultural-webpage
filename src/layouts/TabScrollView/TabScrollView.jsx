/* eslint-disable react/function-component-definition */

// @mui components
import { Box, Typography } from "@mui/material";

// own components
import TabView from "components/TabView/TabView";
import ScrollView from "layouts/ScrollView/ScrollView";
import Card from "components/Card/Card";

// contexts
import { useLanguage } from "context/LanguageProvider";

// images
import bruce from "assets/images/bruce-mars.jpg";

const TabScrollView = () => {
  const { languageState } = useLanguage();
  const tabs = ["Fotograía", "Fotograía", "Fotograía", "Fotograía"];

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

  const content = [
    <ScrollView
      sx={{ padding: "0", paddingLeft: "0" }}
      title={languageState.texts.Home.Subtitles[0]}
      content={cards}
    />,
    <ScrollView
      sx={{ padding: "0", paddingLeft: "0" }}
      title={languageState.texts.Home.Subtitles[0]}
      content={cards}
    />,
    <ScrollView
      sx={{ padding: "0", paddingLeft: "0" }}
      title={languageState.texts.Home.Subtitles[0]}
      content={cards}
    />,
    <ScrollView
      sx={{ padding: "0", paddingLeft: "0" }}
      title={languageState.texts.Home.Subtitles[0]}
      content={cards}
    />,
  ];

  return (
    <Box sx={{ padding: { md: "40px 10rem", xs: "40px 20px" } }}>
      <Box>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          {languageState.texts.Home.Subtitles[0]}
        </Typography>
      </Box>
      <TabView tabs={tabs} content={content} />
    </Box>
  );
};

export default TabScrollView;
