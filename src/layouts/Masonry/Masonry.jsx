/* eslint-disable react/function-component-definition */
/* eslint-disable react/no-array-index-key */

// @mui components
import { Box, Typography, useTheme, Grid } from "@mui/material";

// own component
import Card from "components/Card/Card";

// contexts
import { useLanguage } from "context/LanguageProvider";

// images
import bruce from "assets/images/bruce-mars.jpg";

const Masonry = () => {
  const { languageState } = useLanguage();
  const theme = useTheme();

  const cards = [
    <Card
      img={bruce}
      sx={{ background: "#00000000", border: `1px solid ${theme.palette.secondary.main}` }}
      contentPosition="down"
      imageProps={{ alt: "bruce" }}
      elevation={0}
    >
      <Typography color="secondary" sx={{ fontWeight: "700" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
      <Typography variant="body1" sx={{ marginTop: "10px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
    </Card>,
    <Card
      img={bruce}
      sx={{ background: "#00000000", border: `1px solid ${theme.palette.secondary.main}` }}
      contentPosition="down"
      imageProps={{ alt: "bruce", height: "340px" }}
      elevation={0}
    >
      <Typography color="secondary" sx={{ fontWeight: "700" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
      <Typography variant="body1" sx={{ marginTop: "10px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
    </Card>,
    <Card
      img={bruce}
      sx={{ background: "#00000000", border: `1px solid ${theme.palette.secondary.main}` }}
      contentPosition="down"
      imageProps={{ alt: "bruce" }}
      elevation={0}
    >
      <Typography color="secondary" sx={{ fontWeight: "700" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
      <Typography variant="body1" sx={{ marginTop: "10px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
    </Card>,
    <Card
      img={bruce}
      sx={{
        marginTop: "-115px",
        background: "#00000000",
        border: `1px solid ${theme.palette.secondary.main}`,
      }}
      contentPosition="down"
      imageProps={{ alt: "bruce" }}
      elevation={0}
    >
      <Typography color="secondary" sx={{ fontWeight: "700" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
      <Typography variant="body1" sx={{ marginTop: "10px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
    </Card>,
    <Card
      img={bruce}
      sx={{ background: "#00000000", border: `1px solid ${theme.palette.secondary.main}` }}
      contentPosition="down"
      imageProps={{ alt: "bruce", height: "340px" }}
      elevation={0}
    >
      <Typography color="secondary" sx={{ fontWeight: "700" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
      <Typography variant="body1" sx={{ marginTop: "10px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
    </Card>,
    <Card
      img={bruce}
      sx={{
        marginTop: "-115px",
        background: "#00000000",
        border: `1px solid ${theme.palette.secondary.main}`,
      }}
      contentPosition="down"
      imageProps={{ alt: "bruce" }}
      elevation={0}
    >
      <Typography color="secondary" sx={{ fontWeight: "700" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
      <Typography variant="body1" sx={{ marginTop: "10px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo, fugiat tempora
      </Typography>
    </Card>,
  ];

  return (
    <Box
      sx={{
        padding: { md: "40px 10rem", xs: "40px 40px" },
        background: theme.palette.primary.main,
      }}
    >
      <Box>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: theme.palette.secondary.title }}>
          {languageState.texts.Home.Subtitles[0]}
        </Typography>
      </Box>
      <Grid sx={{ margin: "40px 0" }} container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="left" spacing={2}>
            {cards.map((jtem, index) => (
              <Grid key={index} item sx={{ width: "389px", marginRight: "20px" }}>
                {jtem}
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Masonry;
