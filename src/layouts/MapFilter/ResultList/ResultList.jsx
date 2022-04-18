/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/function-component-definition */
import { useEffect, useState } from "react";

// framer-motion
import { motion } from "framer-motion";

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
  const { content, visible } = props;

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

  const delay = {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  };

  const listItem = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <Container
      direction="column"
      align="left"
      sx={{
        background: theme.palette.secondary.main,
        width: "600px",
        transform: visible ? "translateX(0)" : "translateX(-600px)",
        transition: "transform 500ms ease",
      }}
    >
      <Box sx={{ padding: "25px 35px", height: "610px" }}>
        <motion.div variants={delay} style={{ height: "100%" }}>
          {splittedContent.length > 0 &&
            splittedContent[active].map((item) => (
              <motion.div
                key={item.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={listItem}
              >
                <Container align="center" sx={{ marginTop: "20px" }}>
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
              </motion.div>
            ))}
        </motion.div>
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
  visible: PropTypes.bool.isRequired,
  content: PropTypes.array.isRequired,
};

export default ResultList;
