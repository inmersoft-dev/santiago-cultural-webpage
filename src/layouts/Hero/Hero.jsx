/* eslint-disable react/function-component-definition */

// prop types
import PropTypes from "prop-types";

// @mui components
import { Box } from "@mui/material";

const Hero = (props) => {
  const { children } = props;

  return (
    <Box
      id="hero-section"
      sx={{
        backgroundImage: "url(https://wallpapercave.com/wp/wp3268618.jpg)",
        height: "100vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "none",
      }}
    >
      {children}
    </Box>
  );
};

Hero.defaultProps = {
  children: <div />,
};

Hero.propTypes = {
  children: PropTypes.node,
};

export default Hero;
