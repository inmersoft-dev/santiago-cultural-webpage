/* eslint-disable react/function-component-definition */
import { useEffect } from "react";

// prop types
import PropTypes from "prop-types";

// @mui components
import { Box } from "@mui/material";

const Map = (props) => {
  const { visible } = props;

  useEffect(() => {}, []);
  return (
    <Box
      sx={{
        transform: visible ? "translateX(0)" : "translateX(-600px)",
        transition: "transform 500ms ease",
      }}
    >
      Hola
    </Box>
  );
};

Map.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default Map;
