/* eslint-disable react/function-component-definition */
import { useState, useEffect } from "react";

// @mui components
import {
  Box,
  Typography,
  Divider,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Button,
  useTheme,
} from "@mui/material";

// @mui icons
import MapIcon from "@mui/icons-material/Map";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

// own components
import Container from "components/Container/Container";
import Grid from "components/Grid/Grid";
import Calendar from "components/Calendar/Calendar";
import ScrollView from "layouts/ScrollView/ScrollView";
import Card from "components/Card/Card";

// layouts
import Hero from "layouts/Hero/Hero";
import MapFilter from "layouts/MapFilter/MapFilter";

// contexts
import { useLanguage } from "context/LanguageProvider";
import { useRoute } from "context/RouterProvider";

// images
import bruce from "assets/images/bruce-mars.jpg";

const Activities = () => {
  const { routeState, setRouteState } = useRoute();
  const { languageState } = useLanguage();
  const theme = useTheme();

  const [active, setActive] = useState(0);
  const [view, setView] = useState(0);

  const cards = [
    <Card
      sx={{
        background: theme.palette.primary.main,
      }}
      border
      img={bruce}
      imageProps={{ alt: "bruce" }}
      contentPosition="down"
    >
      <Typography sx={{ fontWeight: "600", color: theme.palette.primary.light }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
      <Typography sx={{ marginTop: "10px", fontWeight: "500" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
    </Card>,
    <Card
      sx={{ background: theme.palette.primary.main }}
      border
      img={bruce}
      imageProps={{ alt: "bruce" }}
      contentPosition="down"
    >
      <Typography sx={{ fontWeight: "600", color: theme.palette.primary.light }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
      <Typography sx={{ marginTop: "10px", fontWeight: "500" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
    </Card>,
    <Card
      border
      sx={{ background: theme.palette.primary.main }}
      img={bruce}
      imageProps={{ alt: "bruce" }}
      contentPosition="down"
    >
      <Typography sx={{ fontWeight: "600", color: theme.palette.primary.light }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
      <Typography sx={{ marginTop: "10px", fontWeight: "500" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
    </Card>,
    <Card
      border
      sx={{ background: theme.palette.primary.main }}
      img={bruce}
      imageProps={{ alt: "bruce" }}
      contentPosition="down"
    >
      <Typography sx={{ fontWeight: "600", color: theme.palette.primary.light }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
      <Typography sx={{ marginTop: "10px", fontWeight: "500" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
    </Card>,

    <Card
      border
      sx={{ background: theme.palette.primary.main }}
      img={bruce}
      imageProps={{ alt: "bruce" }}
      contentPosition="down"
    >
      <Typography sx={{ fontWeight: "600", color: theme.palette.primary.light }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
      <Typography sx={{ marginTop: "10px", fontWeight: "500" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
    </Card>,

    <Card
      border
      sx={{ background: theme.palette.primary.main }}
      img={bruce}
      imageProps={{ alt: "bruce" }}
      contentPosition="down"
    >
      <Typography sx={{ fontWeight: "600", color: theme.palette.primary.light }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
      <Typography sx={{ marginTop: "10px", fontWeight: "500" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
    </Card>,
  ];

  const cardsScroll = [
    <Card
      sx={{ background: theme.palette.secondary.main }}
      img={bruce}
      imageProps={{ alt: "bruce" }}
      contentPosition="down"
    >
      <Typography sx={{ fontWeight: "600", color: theme.palette.primary.light }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
      <Typography sx={{ marginTop: "10px", fontWeight: "500" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
    </Card>,
    <Card
      sx={{ background: theme.palette.secondary.main }}
      img={bruce}
      imageProps={{ alt: "bruce" }}
      contentPosition="down"
    >
      <Typography sx={{ fontWeight: "600", color: theme.palette.primary.light }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
      <Typography sx={{ marginTop: "10px", fontWeight: "500" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
    </Card>,
    <Card
      sx={{ background: theme.palette.secondary.main }}
      img={bruce}
      imageProps={{ alt: "bruce" }}
      contentPosition="down"
    >
      <Typography sx={{ fontWeight: "600", color: theme.palette.primary.light }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
      <Typography sx={{ marginTop: "10px", fontWeight: "500" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
    </Card>,
    <Card
      sx={{ background: theme.palette.secondary.main }}
      img={bruce}
      imageProps={{ alt: "bruce" }}
      contentPosition="down"
    >
      <Typography sx={{ fontWeight: "600", color: theme.palette.primary.light }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
      <Typography sx={{ marginTop: "10px", fontWeight: "500" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
    </Card>,

    <Card
      sx={{ background: theme.palette.secondary.main }}
      img={bruce}
      imageProps={{ alt: "bruce" }}
      contentPosition="down"
    >
      <Typography sx={{ fontWeight: "600", color: theme.palette.primary.light }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
      <Typography sx={{ marginTop: "10px", fontWeight: "500" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
    </Card>,

    <Card
      sx={{ background: theme.palette.secondary.main }}
      img={bruce}
      imageProps={{ alt: "bruce" }}
      contentPosition="down"
    >
      <Typography sx={{ fontWeight: "600", color: theme.palette.primary.light }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
      <Typography sx={{ marginTop: "10px", fontWeight: "500" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
    </Card>,
  ];

  useEffect(() => {
    setRouteState({ type: "set", to: 3 });
  }, []);

  useEffect(() => {
    if (routeState.jndex || routeState.jndex === 0) setView(routeState.jndex);
  }, [routeState.jndex]);

  const handleRadio = (e) => {
    const { id } = e.target;
    setActive(Number(id.substring(1)));
  };

  const handleView = (e) => {
    let node = e.target;
    while (node.nodeName.toLowerCase() !== "button") node = node.parentNode;

    const { id } = node;
    setView(Number(id.substring(1)));
  };

  return (
    <Box sx={{ background: theme.palette.primary.main }}>
      <Hero />
      <Box
        sx={{
          padding: { md: "40px 10rem", xs: "40px 40px" },
          background: theme.palette.secondary.dark,
        }}
      >
        <Box>
          <Typography variant="h4" color="primary">
            {languageState.texts.Activities.Title}
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginTop: "20px", fontWeight: 700, color: theme.palette.primary.light }}
          >
            {languageState.texts.Activities.Subtitle}
          </Typography>
        </Box>
        <Box sx={{ paddingBottom: "20px" }}>
          <Container
            sx={{
              margin: { md: "40px 40px 20px 40px", sm: "40px 0 20px 0" },
              flexDirection: { sm: "row", xs: "column" },
              alignItems: { sm: "end", xs: "baseline" },
              justifyContent: { sm: "space-between", xs: "flex-start" },
            }}
          >
            <FormControl>
              <Typography variant="h5" color="primary" sx={{ fontWeight: 700 }}>
                {languageState.texts.Activities.Filter.Title}
              </Typography>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                sx={{ marginTop: "10px" }}
                name="row-radio-buttons-group"
              >
                {languageState.texts.Activities.Filter.Radios.map((item) => (
                  <FormControlLabel
                    key={item.Filter}
                    value={item.Filter}
                    control={
                      <Radio
                        id={`r${item.Filter}`}
                        checked={active === item.Filter}
                        onChange={handleRadio}
                        color="primary"
                      />
                    }
                    label={item.Label}
                  />
                ))}
              </RadioGroup>
            </FormControl>
            <Container sx={{ margin: { xs: "20px 0", md: 0 } }}>
              <Button
                id="v1"
                sx={{ minWidth: 0, padding: "5px 5px", marginRight: "5px" }}
                variant="contained"
                color="secondary"
                onClick={handleView}
              >
                <MapIcon sx={{ color: theme.palette.secondary.light }} />
              </Button>
              <Button
                id="v2"
                sx={{ minWidth: 0, padding: "5px 5px" }}
                variant="contained"
                onClick={handleView}
                color="secondary"
              >
                <CalendarMonthIcon sx={{ color: theme.palette.secondary.light }} />
              </Button>
            </Container>
          </Container>
          <Divider sx={{ border: `1px solid ${theme.palette.secondary.main}` }} />
        </Box>
      </Box>
      {view === 0 && (
        <Box>
          <Grid
            sx={{ padding: { lg: "80px 10rem 40px 10rem", xs: "40px 20px 0 20px" } }}
            content={cards}
          />
          <ScrollView
            sx={{
              padding: { md: "0 6rem 80px 7rem", xs: "0 25px 80px 25px" },
            }}
            titleProps={{
              variant: "h4",
              sx: { marginBottom: "20px", color: theme.palette.primary.light },
            }}
            title={languageState.texts.Home.Subtitles[0]}
            content={cardsScroll}
          />
        </Box>
      )}
      {view === 1 && <MapFilter />}
      {view === 2 && (
        <Container
          justify="center"
          sx={{
            background: theme.palette.secondary.main,
            padding: { lg: "40px 10rem 100px 10rem", xs: "40px 20px 0 20px" },
          }}
        >
          <Calendar />
        </Container>
      )}
    </Box>
  );
};

export default Activities;
