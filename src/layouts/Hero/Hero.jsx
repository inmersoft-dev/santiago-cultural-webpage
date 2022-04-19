/* eslint-disable react/function-component-definition */

// prop types
import PropTypes from "prop-types";

// @mui components
import { Box } from "@mui/material";

const Hero = (props) => {
  const { children, height } = props;
  console.log(height);

  return (
    <Box
      id="hero-section"
      sx={{
        backgroundImage: "url(https://wallpapercave.com/wp/wp3268618.jpg)",
        height: { height },
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
  height: "100vh",
};

Hero.propTypes = {
  children: PropTypes.node,
  height: PropTypes.string,
};

export default Hero;
