/* eslint-disable react/function-component-definition */
// prop-types
import PropTypes from "prop-types";

// react-loader-spinner
import { ThreeDots, Rings } from "react-loader-spinner";

// @mui components
import { Box } from "@mui/material";

// theme
import light from "assets/theme/light";
import dark from "assets/theme/dark";

// styles
import "./style.css";

const Loading = (props) => {
  const { type, visible, id, width, height, position, extra, background, color } = props;
  return (
    <Box
      className={type}
      id={id}
      sx={{
        position,
        opacity: visible ? 1 : 0,
        zIndex: visible ? 98 : -1,
        transition: "all 200ms ease",
        width,
        height,
        backdropFilter: "blur(1px)",
        background,
        ...extra,
      }}
    >
      {type === "center" ? (
        <ThreeDots
          ariaLabel="loading-indicator"
          color={color}
          height={type === "center" ? 20 : 100}
          width={type === "center" ? 50 : 100}
          timeout={0}
        />
      ) : (
        <Rings
          ariaLabel="loading-indicator"
          color={color}
          height={type === "center" ? 20 : 100}
          width={type === "center" ? 50 : 100}
          timeout={0}
        />
      )}
    </Box>
  );
};

Loading.defaultProps = {
  type: "big",
  id: "",
  width: "100vw",
  height: "100vh",
  position: "absolute",
  background: `${light.palette.secondary.dark}94`,
  color: dark.palette.primary.main,
  extra: {},
};

Loading.propTypes = {
  visible: PropTypes.bool.isRequired,
  type: PropTypes.string,
  id: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  position: PropTypes.string,
  background: PropTypes.string,
  color: PropTypes.string,
  extra: PropTypes.objectOf(PropTypes.string),
};

export default Loading;
