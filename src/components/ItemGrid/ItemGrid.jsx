/* eslint-disable no-nested-ternary */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/forbid-prop-types */

// prop types
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

// @mui components
import {
  useTheme,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

// contexts
import { useLanguage } from "context/LanguageProvider";

// own components
import HtmlEditor from "components/HtmlEditor/HtmlEditor";

// Import Css Component
import "./item-grid.css";

const ItemGrid = (props) => {
  const { languageState } = useLanguage();

  const { borderColor, element } = props;
  const { headerImage, texts } = element;

  const theme = useTheme();

  return (
    <Card
      elevation={0}
      sx={{
        width: { md: "389px", xs: "335px" },
        border: `1px outset ${theme.palette[borderColor].main}`,
        borderRadius: "10px",
        m: 2,
        background: "#00000000",
        height: "340px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={headerImage}
        alt="Imagen de Noticia"
        sx={{ borderRadius: "0 0 8px 8px" }}
      />
      <CardContent>
        <Typography gutterBottom variant="body1" component="div">
          {texts.title}
        </Typography>
        <HtmlEditor value={texts.description} />
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          a: {
            textDecoration: "none",
          },
        }}
      >
        <Link to={`/details:${element.id}-${element.type}`} target="_blank" rel="noreferrer">
          <Button
            variant="contained"
            size="small"
            sx={{
              textTransform: "capitalize",
              backgroundColor: `${theme.palette[borderColor].main}`,
            }}
          >
            {languageState.texts.Home.ReadMore}
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

ItemGrid.defaultProps = {
  borderColor: "primary",
  element: {},
};

ItemGrid.propTypes = {
  borderColor: PropTypes.string,
  element: PropTypes.object,
};

export default ItemGrid;
