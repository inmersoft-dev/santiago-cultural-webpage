/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/function-component-definition */
import { useEffect, useState } from "react";

// prop types
import PropTypes from "prop-types";

// @mui components
import { Box, Button, Typography, useTheme } from "@mui/material";

// @mui icons
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// own components
import Container from "components/Container/Container";
import Image from "components/Image/Image";

// contexts
import { useLanguage } from "context/LanguageProvider";

const ResultList = (props) => {
  const { content } = props;

  const [splittedContent, setSplittedContent] = useState([]);
  const [active, setActive] = useState(0);

  const { languageState } = useLanguage();
  const theme = useTheme();

  useEffect(() => {
    const max = 3;
    const finalContent = [];
    let row = [];
    content.forEach((item, i) => {
      if (i !== 0 && i % max === 0) {
        finalContent.push(row);
        row = [];
      } else row.push(item);
    });
    setSplittedContent(finalContent);
  }, [content]);

  const handleActive = (e) => {
    const { id } = e.target;
    if (id === "goLeft") setActive(active === 0 ? splittedContent.length - 1 : active - 1);
    else setActive(active === splittedContent.length - 1 ? 0 : active + 1);
  };

  return (
    <Container
      direction="column"
      align="left"
      sx={{ background: theme.palette.secondary.main, width: "40%" }}
    >
      <Box sx={{ padding: "25px 35px", height: "610px" }}>
        {splittedContent.length > 0 &&
          splittedContent[active].map((item, i) => (
            <Container key={`k${i}`} align="center" sx={{ marginTop: "20px" }}>
              <Image img={item.url} width={150} height={150} style={{ borderRadius: "15px" }} />
              <Box sx={{ marginLeft: "25px" }}>
                <Typography variant="body1" color="primary">
                  {item.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: theme.palette.primary.light, marginTop: "10px" }}
                >
                  {item.text}
                </Typography>
              </Box>
            </Container>
          ))}
      </Box>

      <Container
        align="center"
        justify="space-between"
        sx={{ background: theme.palette.secondary.another, padding: "25px 35px" }}
      >
        <Typography variant="body1">
          {`${languageState.texts.Activities.Result.Results} ${active + 1} - ${
            splittedContent.length
          }`}
        </Typography>
        <Box>
          <Button
            id="goLeft"
            variant="contained"
            color="secondary"
            sx={{ padding: "5px 10px", minWidth: "10px", marginRight: "10px" }}
            onClick={handleActive}
          >
            <ArrowBackIosNewIcon />
          </Button>
          <Button
            id="goRight"
            variant="contained"
            color="secondary"
            sx={{ padding: "5px 10px", minWidth: "10px" }}
            onClick={handleActive}
          >
            <ArrowForwardIosIcon />
          </Button>
        </Box>
      </Container>
    </Container>
  );
};

ResultList.propTypes = {
  content: PropTypes.array.isRequired,
};

export default ResultList;
