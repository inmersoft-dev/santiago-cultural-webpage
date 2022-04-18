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

// layouts
import Hero from "layouts/Hero/Hero";
import MapFilter from "layouts/MapFilter/MapFilter";

// contexts
import { useLanguage } from "context/LanguageProvider";
import { useRoute } from "context/RouterProvider";

const Activities = () => {
  const { setRouteState } = useRoute();
  const { languageState } = useLanguage();
  const theme = useTheme();

  const [active, setActive] = useState(0);
  const [view, setView] = useState(0);

  useEffect(() => {
    setRouteState({ type: "set", to: 5 });
  }, []);

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
    <Box>
      <Hero />
      <Box
        sx={{
          padding: { md: "40px 10rem", xs: "40px 40px" },
          background: theme.palette.primary.main,
        }}
      >
        <Box>
          <Typography variant="h4" color="secondary">
            {languageState.texts.Activities.Title}
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 700 }} color="secondary">
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
              <Typography variant="h5" color="secondary" sx={{ fontWeight: 700 }}>
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
                        color="secondary"
                      />
                    }
                    label={item.Label}
                  />
                ))}
              </RadioGroup>
            </FormControl>
            {/* <Button
              sx={{ padding: "10px 20px", marginTop: { md: "0", xs: "20px" } }}
              variant="contained"
              color="secondary"
            >
              {languageState.texts.Activities.Filter.Button}
            </Button> */}
            <Container>
              <Button
                id="v0"
                sx={{ minWidth: 0, padding: "5px 5px", marginRight: "5px" }}
                variant="contained"
                color="secondary"
                onClick={handleView}
              >
                <MapIcon sx={{ color: theme.palette.secondary.light }} />
              </Button>
              <Button
                id="v1"
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
      {view === 0 && <MapFilter />}
      {view === 1}
    </Box>
  );
};

export default Activities;
