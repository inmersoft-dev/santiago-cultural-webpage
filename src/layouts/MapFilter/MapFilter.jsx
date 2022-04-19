/* eslint-disable react/function-component-definition */
import { useEffect, useState } from "react";

// @mui components
import { Box, Button } from "@mui/material";

// @mui icons
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

// owm components
import Container from "components/Container/Container";

// images
import bruce from "assets/images/bruce-mars.jpg";

// layouts
import ResultList from "./ResultList/ResultList";
import Map from "./Map/Map";

const Hero = () => {
  const [resultList, setResultList] = useState(true);

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

  useEffect(() => {}, []);
  return (
    <Box id="map-filter" sx={{ marginBottom: "32px" }}>
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
