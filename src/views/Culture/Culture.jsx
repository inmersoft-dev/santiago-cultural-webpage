/* eslint-disable react/function-component-definition */
import { useEffect, useState } from "react";

// @mui components
import { Box, Typography } from "@mui/material";

// own components
import Container from "components/Container/Container";
import GridItem from "components/GridItem/GridItem";
import ItemGrid from "components/ItemGrid/ItemGrid";
import Loading from "components/Loading/Loading";

// layouts
import Hero from "layouts/Hero/Hero";

// contexts
import { useLanguage } from "context/LanguageProvider";
import { useRoute } from "context/RouterProvider";

// services
import post from "../../services/post";

import ImagCrash from "../../assets/images/crash.webp";

const Culture = () => {
  const { setRouteState } = useRoute();
  const { languageState } = useLanguage();
  const [centers, setCenters] = useState([]);

  const fetchCenters = async () => {
    try {
      const { result } = await post("places");

      if (result.indexOf("Error") > -1) {
        // hi mom
      } else {
        const items = [];
        result.forEach((item) => {
          const element = {
            headerImage: item.headerImages.length > 0 ? item.headerImages[0].url : `${ImagCrash}`,
            texts: {
              title: item.texts.name,
              description: item.texts.description,
            },
          };
          items.push(<ItemGrid element={element} />);
        });
        setCenters(items);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCenters();
  }, []);

  /* console.log(centers); */

  /* const items = [
    <ItemGrid borderColor="secondary" />,
    <ItemGrid borderColor="secondary" />,
    <ItemGrid borderColor="secondary" />,
    <ItemGrid borderColor="secondary" />,
    <ItemGrid borderColor="secondary" />,
    <ItemGrid borderColor="secondary" />,
  ]; */

  useEffect(() => {
    setRouteState({ type: "set", to: 2 });
  }, []);

  return (
    <Box>
      <Hero sx={{ height: "600px" }}>
        <Container
          sx={{
            height: "100%",
            padding: { md: "0 10rem 60px 10rem", xs: "40px" },
            flexDirection: { md: "row", xs: "column" },
            justifyContent: { md: "space-between", xs: "flex-end" },
            alignItems: { md: "end", xs: "start" },
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", marginBottom: { md: "0", xs: "40px" } }}
          >
            {languageState.texts.Culture.Title}
          </Typography>
          <Typography sx={{ width: { md: "600px", xs: "100%" } }}>
            {languageState.texts.Culture.Paragraph}
          </Typography>
        </Container>
      </Hero>
      {centers.length > 0 ? (
        <GridItem background="primary" borderColor="secondary" content={centers} />
      ) : (
        <Loading visible />
      )}
    </Box>
  );
};

export default Culture;
