/* eslint-disable react/function-component-definition */
import React, { useEffect, useState } from "react";

// mui components
import { Button, Typography, useTheme } from "@mui/material";

// mui icons
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import PropTypes from "prop-types";

// images
import image from "../../assets/images/ivancik.jpg";

// styles
import "./full-modal.css";

const FullModal = (props) => {
  const { title, text, img, onBack, opacity } = props;
  const [zIndex, setZIndex] = useState(0);
  const theme = useTheme();
  useEffect(() => {
    if (opacity === 1) {
      document.body.style.overflow = "hidden";
      setZIndex(999);
    } else {
      document.body.style.overflow = "auto";
      setZIndex(-1);
    }
  }, [opacity]);

  return (
    <div className="full-modal" style={{ opacity, zIndex }}>
      <div
        className="column midium-padding column-image"
        style={{ backgroundImage: `url(${img})`, width: "50%" }}
      >
        <Button onClick={onBack} className="back-button">
          <ArrowBackIosIcon />
        </Button>
        <Typography variant="h4" color="#fff">
          {title}
        </Typography>
      </div>
      <div className="column padding" style={{ backgroundColor: theme.palette.primary.main }}>
        <Typography variant="subtitle1" color="#fff">
          {text}
        </Typography>
      </div>
    </div>
  );
};

FullModal.defaultProps = {
  title: "Lorem ipsum dolor sit amet consectetur",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, repellat unde. Quos, rerum deserunt! Quod modi perferendis numquam animi laborum similique eum assumenda repellat ducimus vel. Sequi ratione esse illo!",
  img: image,
  onBack: null,
  opacity: 0,
};

FullModal.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string,
  onBack: PropTypes.func,
  opacity: PropTypes.number,
};

export default FullModal;
