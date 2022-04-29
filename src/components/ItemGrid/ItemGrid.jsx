/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/forbid-prop-types */

// prop types
import PropTypes from "prop-types";

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

// Import Css Component
import "./item-grid.css";
/* import { useEffect, useState } from "react"; */

// Img import
/* import CardImage from "../../assets/images/bruce-mars.jpg"; */

const ItemGrid = (props) => {
  const { borderColor, element } = props;
  const { headerImage, texts } = element;
  /*  const [bodyText, setBodyText] = useState(""); */

  const theme = useTheme();

  /* useEffect(() => {
    if (texts) {
      console.log(texts.content[0].value.slice(0, 100));
      setBodyText(`${texts?.content[0].value.slice(0, 100)}...`);
    }
  }, []); */

  /* console.log(bodyText); */

  return (
    <Card
      elevation={0}
      sx={{
        width: { md: "389px", xs: "335px" },
        border: `1px outset ${theme.palette[borderColor].main}`,
        borderRadius: "10px",
        m: 2,
        background: "#00000000",
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={headerImage.url}
        alt="Imagen de Noticia"
        sx={{ borderRadius: "0 0 8px 8px" }}
      />
      <CardContent>
        <Typography gutterBottom variant="body1" component="div">
          {texts.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {texts.content[0].value ? `${texts.content[0].value.slice(0, 160)}...` : ""}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="contained" size="small" sx={{ textTransform: "capitalize" }}>
          Learn More
        </Button>
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
