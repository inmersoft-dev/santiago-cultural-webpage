/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */

// @mui components
import { Box, Divider, Typography, useTheme } from "@mui/material";

// own components
import Image from "components/Image/Image";
import Container from "components/Container/Container";

// contexts
import { useLanguage } from "context/LanguageProvider";

// Import CSS Component
import "./know-us.css";

// images
import vision from "assets/images/vision.png";
import mission from "assets/images/mission.png";
import misionImg from "assets/images/ivana-squares.jpg";

const KnowUs = () => {
  const { languageState } = useLanguage();

  const theme = useTheme();
  return (
    <Box
      className="know-us__container"
      sx={{
        backgroundColor: theme.palette.secondary.main,
        /* padding: { md: "4rem 0 8rem 10rem", sm: "4rem 0 8rem 6rem", xs: "4rem 1rem 8rem 1rem" }, */
      }}
    >
      <div className="know-us__texts-container">
        <Typography variant="h4" sx={{ color: theme.palette.primary.main }}>
          {languageState.texts.AboutUs.Title}
        </Typography>
        <Divider
          sx={{
            borderWidth: " 1px",
            borderStyle: "solid",
            borderColor: "#ffd8a3",
            width: "80px",
            mb: 2,
          }}
        />
        <Typography
          variant="body1"
          sx={{ width: { md: "40vw", xs: "60vw" }, color: theme.palette.primary.light }}
        >
          {languageState.texts.AboutUs.Subtitle}
        </Typography>
      </div>
      <div className="know-us__images-container">
        <Box
          className="know-us__images-container-img"
          sx={{
            backgroundImage: `url(${misionImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Box
            className="know-us__images-text-container"
            sx={{ padding: { md: "5rem", /* sm: "4rem", */ xs: "4rem" } }}
          >
            <Container
              align="center"
              sx={{
                marginBottom: "10px",
                img: {
                  filter: "invert(1)",
                },
              }}
            >
              <Image img={mission} width="35px" height="35px" />
              <Typography
                sx={{ marginLeft: "10px" }}
                className="know-us__title-section"
                variant="h4"
              >
                {languageState.texts.AboutUs.Mission.Title}
              </Typography>
            </Container>
            <Typography variant="body1" className="know-us__text-section1">
              {languageState.texts.AboutUs.Mission.Text}
            </Typography>
          </Box>
        </Box>
        <Box
          className="know-us__container-text"
          sx={{ backgroundColor: theme.palette.warning.main, padding: { md: "5rem", xs: "4rem" } }}
        >
          <Box
            className="know-us__container-text-container"
            /* sx={{ padding: { md: "5rem", xs: "2rem" } }} */
          >
            <Container
              align="center"
              sx={{
                marginBottom: "10px",
                img: {
                  filter: "invert(1)",
                },
              }}
            >
              <Image img={vision} width="35px" height="35px" />
              <Typography
                sx={{ marginLeft: "10px" }}
                className="know-us__title-section"
                variant="h4"
              >
                {languageState.texts.AboutUs.Vision.Title}
              </Typography>
            </Container>

            <Typography variant="body1" className="know-us__text-section2">
              {languageState.texts.AboutUs.Vision.Text}
            </Typography>
          </Box>
        </Box>
      </div>
    </Box>
  );
};

export default KnowUs;
