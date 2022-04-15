/* eslint-disable react/function-component-definition */

// prop types
import PropTypes from "prop-types";

// react-router-dom
import { Outlet } from "react-router-dom";

// @mui components
import { Box } from "@mui/material";

// own components
import Navbar from "components/Navbar/Navbar";
import Footer from "components/Footer/Footer";

const View = (props) => {
  const { noFooter } = props;

  return (
    <Box>
      <Navbar />
      <Outlet />
      {!noFooter && <Footer />}
    </Box>
  );
};

View.defaultProps = {
  noFooter: false,
};

View.propTypes = {
  noFooter: PropTypes.bool,
};

export default View;
