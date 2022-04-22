/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-no-undef */
// prop-types
import PropTypes from "prop-types";

// framer-motion
import { motion } from "framer-motion";

// mui components
import { Box } from "@mui/material";

// images
import logonotext from "assets/images/logonotext.png";

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
      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      >
        <img className="rotate" src={logonotext} alt="logo trinidad" />
      </motion.div>
    </Box>
  );
};

BigLoading.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default BigLoading;
