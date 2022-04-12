/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-no-undef */
// prop-types
import PropTypes from "prop-types";

// mui components
import { Box } from "@mui/material";

// images
import lightLogo from "assets/images/optlogo.webp";
import darkLogo from "assets/images/darlogo.webp";

// context
import { useMode } from "context/ModeProvider";

import "./style.css";

const BigLoading = (props) => {
  const { modeState } = useMode();

  const { visible } = props;

  return (
    <Box
      id="contenedor_carga"
      style={{
        backgroundColor: modeState.mode === "light" ? "#E3F2FD" : "#222333",
        opacity: visible ? 1 : 0,
        zIndex: visible ? 99 : -1,
      }}
    >
      {modeState.mode === "light" ? (
        <img src={lightLogo} alt="logo trinidad" />
      ) : (
        <img src={darkLogo} alt="logo trinidad" />
      )}

      <Box className="progress_bar">
        <Box className="bar_h" />
      </Box>
    </Box>
  );
};

BigLoading.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default BigLoading;
