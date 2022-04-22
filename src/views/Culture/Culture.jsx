/* eslint-disable react/function-component-definition */
import { useEffect } from "react";

// @mui components
import { Box, Typography } from "@mui/material";

// own components
import Container from "components/Container/Container";
import GridItem from "components/GridItem/GridItem";
import ItemGrid from "components/ItemGrid/ItemGrid";

// layouts
import Hero from "layouts/Hero/Hero";

// contexts
import { useLanguage } from "context/LanguageProvider";
import { useRoute } from "context/RouterProvider";

const Culture = () => {
  const { setRouteState } = useRoute();
  const { languageState } = useLanguage();

  const items = [
    <ItemGrid borderColor="secondary" />,
    <ItemGrid borderColor="secondary" />,
    <ItemGrid borderColor="secondary" />,
    <ItemGrid borderColor="secondary" />,
    <ItemGrid borderColor="secondary" />,
    <ItemGrid borderColor="secondary" />,
  ];

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
      <GridItem background="primary" content={items} />
    </Box>
  );
};

export default Culture;
