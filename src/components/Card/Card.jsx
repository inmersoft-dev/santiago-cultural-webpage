/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/function-component-definition */

// react-router-dom
import { Link } from "react-router-dom";

// @emotion/css
import { css } from "@emotion/css";

// prop types
import PropTypes from "prop-types";

// @mui components
import {
  useTheme,
  Button,
  Card as MuiCard,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";

// own components
import Container from "components/Container/Container";

// contexts
import { useLanguage } from "context/LanguageProvider";

const Card = (props) => {
  const { elevation, contentPosition, route, children, img, imageProps, sx } = props;

  const { languageState } = useLanguage();
  const theme = useTheme();

  const Content = () => <CardContent>{children}</CardContent>;

  const newSx = {
    background: theme.palette.text.main,
    width: "389px",
    marginRight: "30px",
    ...sx,
  };

  const newImageProps = css({
    height: "220px",
    ...imageProps,
  });

  return (
    <MuiCard sx={newSx} elevation={elevation}>
      <Container direction="column">
        {contentPosition === "up" && <Content />}
        <CardMedia
          component="img"
          className={newImageProps}
          image={img}
          alt={imageProps.alt}
          sx={{ borderRadius: contentPosition === "up" ? "5px 5px 0 0" : "0 0 5px 5px" }}
        />
        {contentPosition === "down" && <Content />}
        {route !== "" && (
          <CardActions sx={{ padding: 0 }}>
            <Link
              style={{
                textDecoration: "none",
                marginTop: "-45px",
                marginLeft: "5px",
              }}
              to={route}
            >
              <Button variant="contained">{languageState.texts.Card.Button}</Button>
            </Link>
          </CardActions>
        )}
      </Container>
    </MuiCard>
  );
};

Card.defaultProps = {
  contentPosition: "up",
  img: "",
  route: "",
  sx: {},
  imageProps: {},
  elevation: 1,
};

Card.propTypes = {
  sx: PropTypes.object,
  imageProps: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.node.isRequired,
  contentPosition: PropTypes.string,
  img: PropTypes.string,
  route: PropTypes.string,
  elevation: PropTypes.number,
};

export default Card;
