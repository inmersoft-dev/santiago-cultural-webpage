/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */

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

// Img import
import CardImage from "../../assets/images/bruce-mars.jpg";

const ItemGrid = (props) => {
  const { borderColor } = props;

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
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={CardImage}
        alt="green iguana"
        sx={{ borderRadius: "0 0 8px 8px" }}
      />
      <CardContent>
        <Typography gutterBottom variant="body1" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
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
};

ItemGrid.propTypes = {
  borderColor: PropTypes.string,
};

export default ItemGrid;
