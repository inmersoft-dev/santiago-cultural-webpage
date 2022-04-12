/* eslint-disable react/function-component-definition */

// react-router-dom
import { Outlet } from "react-router-dom";

// @mui components
import { Box } from "@mui/material";

// own components
import Navbar from "components/Navbar/Navbar";
import Footer from "components/Footer/Footer";

const View = () => (
  <Box>
    <Navbar />
    <Outlet />
    <Footer />
  </Box>
);

export default View;
