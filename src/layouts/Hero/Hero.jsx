/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/function-component-definition */

// prop types
import PropTypes from "prop-types";

// @mui components
import { Box } from "@mui/material";

const Hero = (props) => {
  const { children, sx, bg } = props;

  return (
    <Box
      id="hero-section"
      sx={{
        backgroundImage: `url(${bg || "https://wallpapercave.com/wp/wp3268618.jpg"})`,
        height: "100vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "none",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

Hero.defaultProps = {
  children: <div />,
  sx: {},
  bg: undefined,
};

Hero.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
  bg: PropTypes.string,
};

export default Hero;
