/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */

// @mui components
import { Typography } from "@mui/material";

// own components
import Container from "components/Container/Container";
import Grid from "components/Grid/Grid";
import ItemGrid from "components/ItemGrid/ItemGrid";

// contexts
import { useLanguage } from "context/LanguageProvider";

// styles
import "./grid-item.css";

const items = [<ItemGrid />, <ItemGrid />, <ItemGrid />, <ItemGrid />, <ItemGrid />, <ItemGrid />];

const GridItem = () => {
  const { languageState } = useLanguage();

  return (
    <Container
      align="center"
      direction="column"
      sx={{
        width: "100vw",
      }}
    >
      <Typography
        variant="body1"
        sx={{
          padding: { md: "60px 11rem 40px 11rem", xs: "60px 40px 40px 40px" },
          textAlign: "left",
          width: "100%",
        }}
      >
        {items.length} {languageState.texts.News.Results}
      </Typography>
      <Grid
        sx={{ padding: { lg: "10px 5rem 40px 5rem", xs: "40px 20px 0 20px" } }}
        content={items}
      />
    </Container>
  );
};

export default GridItem;
