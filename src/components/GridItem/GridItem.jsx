/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */

// prop types
import PropTypes from "prop-types";

// @mui components
import { useTheme, Typography } from "@mui/material";

// own components
import Container from "components/Container/Container";
import Grid from "components/Grid/Grid";

// contexts
import { useLanguage } from "context/LanguageProvider";

// styles
import "./grid-item.css";

const GridItem = (props) => {
  const { background, content } = props;

  const { languageState } = useLanguage();
  const theme = useTheme();

  return (
    <Container
      align="center"
      direction="column"
      sx={{
        width: "100vw",
        background: theme.palette[background].main,
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
        {content.length} {languageState.texts.News.Results}
      </Typography>
      <Grid
        sx={{ padding: { lg: "10px 5rem 40px 5rem", xs: "0 20px 0 20px" } }}
        content={content}
      />
    </Container>
  );
};

GridItem.defaultProps = {
  background: "secondary",
};

GridItem.propTypes = {
  background: PropTypes.string,
  content: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default GridItem;
