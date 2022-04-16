/* eslint-disable react/function-component-definition */
import { useEffect, useState } from "react";

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
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

// owm components
import Container from "components/Container/Container";

// contexts
import { useLanguage } from "context/LanguageProvider";

// images
import bruce from "assets/images/bruce-mars.jpg";

// layouts
import ResultList from "./ResultList/ResultList";
import Map from "./Map/Map";

const Hero = () => {
  const { languageState } = useLanguage();
  const theme = useTheme();

  const [resultList, setResultList] = useState(true);
  const [active, setActive] = useState(0);

  useEffect(() => {
    window.onresize = () => {
      if (window.innerWidth >= 1200) setResultList(true);
      else setResultList(false);
    };
  }, []);

  const content = [
    {
      url: bruce,
      id: "result1",
      title:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    },
    {
      url: bruce,
      id: "result2",
      title:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor",
    },
    {
      url: bruce,
      id: "result3",
      title:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor",
    },
    {
      url: bruce,
      id: "result4",
      title:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    },
    {
      id: "result5",
      url: bruce,
      title:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor",
    },
    {
      id: "result6",
      url: bruce,
      title:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor",
    },
    {
      id: "result7",
      url: bruce,
      title:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    },
    {
      id: "result8",
      url: bruce,
      title:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor",
    },
    {
      id: "result9",
      url: bruce,
      title:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor",
    },
  ];

  const handleResultList = () => {
    setResultList(!resultList);
  };

  const handleRadio = (e) => {
    const { id } = e.target;
    setActive(Number(id.substring(1)));
  };

  useEffect(() => {}, []);
  return (
    <Box id="map-filter">
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
              margin: { md: "40px", sm: "40px 0 20px 0" },
              marginBottom: "15px",
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
            <Button
              sx={{ padding: "10px 20px", marginTop: { md: "0", xs: "20px" } }}
              variant="contained"
              color="secondary"
            >
              {languageState.texts.Activities.Filter.Button}
            </Button>
          </Container>
          <Divider sx={{ border: `1px solid ${theme.palette.secondary.main}` }} />
        </Box>
      </Box>
      <Container>
        <Button
          color="primary"
          variant="contained"
          onClick={handleResultList}
          sx={{
            display: { lg: "none", xs: "flex" },
            borderRadius: "100%",
            position: "absolute",
            minWidth: 0,
            marginTop: "10px",
            left: "10px",
            zIndex: 1,
            width: "45px",
            height: "45px",
          }}
        >
          <FormatListBulletedIcon size="30px" />
        </Button>
        <ResultList visible={resultList} content={content} />
        <Map visible={resultList} />
      </Container>
    </Box>
  );
};

export default Hero;
