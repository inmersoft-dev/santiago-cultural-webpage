/* eslint-disable react/function-component-definition */
import { useEffect, useState } from "react";

// @mui components
import { Box, useTheme, Typography, IconButton } from "@mui/material";

// @mui icons
import ReplayIcon from "@mui/icons-material/Replay";

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
import post from "services/post";

// images
import bg4 from "assets/images/bg4.jpg";
import ImagCrash from "assets/images/crash.webp";

const Culture = () => {
  const { setRouteState } = useRoute();
  const { languageState } = useLanguage();

  const [centers, setCenters] = useState([]);
  const theme = useTheme();

  const [loading, setLoading] = useState(1);

  const fetchCenters = async () => {
    try {
      const { result } = await post("places");

      if (result.indexOf("Error") > -1 || !result) {
        // show an error :)
        setLoading(-1);
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
        setLoading(0);
      }
    } catch (error) {
      console.log(error);
      setLoading(-1);
    }
  };

  const reloadCenters = async () => {
    setLoading(1);
    fetchCenters();
  };

  useEffect(() => {
    reloadCenters();
  }, []);

  useEffect(() => {
    setRouteState({ type: "set", to: 2 });
  }, []);

  return (
    <Box>
      <Hero sx={{ height: "600px" }} bg={bg4} />
      <Container sx={{ minHeight: "500px", background: theme.palette.primary.main }}>
        <Loading height="500px" visible={loading === 1} />
        {loading === 0 && <GridItem background="primary" content={centers} />}
        {loading === -1 && (
          <Container justify="center" align="center" sx={{ height: "500px", width: "100%" }}>
            <Typography color="secondary" sx={{ marginRight: "20px" }}>
              {languageState.texts.Error.Connection}
            </Typography>
            <IconButton color="secondary" onClick={reloadCenters} variant="contained">
              <ReplayIcon />
            </IconButton>
          </Container>
        )}
      </Container>
    </Box>
  );
};

export default Culture;
