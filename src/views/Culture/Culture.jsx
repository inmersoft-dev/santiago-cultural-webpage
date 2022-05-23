/* eslint-disable react/function-component-definition */
import { useEffect, useState } from "react";

// @mui components
import { Box, useTheme } from "@mui/material";

// own components
import Container from "components/Container/Container";
import GridItem from "components/GridItem/GridItem";
import ItemGrid from "components/ItemGrid/ItemGrid";
import Loading from "components/Loading/Loading";

// layouts
import Hero from "layouts/Hero/Hero";

// contexts
import { useRoute } from "context/RouterProvider";

// services
import post from "services/post";

// images
import bg4 from "assets/images/bg4.jpg";
import ImagCrash from "assets/images/crash.webp";

const Culture = () => {
  const { setRouteState } = useRoute();
  const [centers, setCenters] = useState([]);
  const theme = useTheme();

  const fetchCenters = async () => {
    try {
      const { result } = await post("places");

      if (result.indexOf("Error") > -1 || !result) {
        // show an error :)
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
          items.push(<ItemGrid element={element} borderColor="secondary" />);
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

  useEffect(() => {
    setRouteState({ type: "set", to: 2 });
  }, []);

  return (
    <Box>
      <Hero sx={{ height: "600px" }} bg={bg4} />
      <Container sx={{ minHeight: "500px", background: theme.palette.primary.main }}>
        <Loading height="500px" width="100%" visible={!(centers.length > 0)} />
        <GridItem background="primary" content={centers} />
      </Container>
    </Box>
  );
};

export default Culture;
