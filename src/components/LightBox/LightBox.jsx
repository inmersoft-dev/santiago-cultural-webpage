/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from "react";

// prop types
import PropTypes from "prop-types";

// @mui components
import { useTheme, IconButton, Box } from "@mui/material";

// @mui icons
import CloseIcon from "@mui/icons-material/Close";

// own container
import Carousel from "components/Carousel/Carousel";
import Container from "components/Container/Container";
import Image from "components/Image/Image";
import Loading from "components/Loading/Loading";

function LightBox(props) {
  const { images, onClose, visible, index } = props;
  const theme = useTheme();

  const [render, setRender] = useState(null);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);

  const imgSX = {
    width: "60vw !important",
    height: "80vh !important",
    objectFit: "cover",
    borderRadius: "1rem",
  };

  useEffect(() => {
    setShow(visible);
  }, [visible]);

  useEffect(() => {
    const toRender = [];
    toRender.push(
      <Container justify="center" sx={{ img: imgSX }}>
        <Image img={images[index]} />
      </Container>
    );
    images.forEach((item, i) => {
      if (i !== index)
        toRender.push(
          <Container key={i} justify="center" sx={{ img: imgSX }}>
            <Image img={item} />
          </Container>
        );
    });
    setRender(toRender);
    setLoading(false);
  }, [index]);

  return (
    <Container
      justify="center"
      align="center"
      sx={{
        flexDirection: "column",
        left: 0,
        top: "0",
        zIndex: show ? 99999 : -1,
        opacity: show ? 1 : 0,
        position: "fixed",
        transition: "all 600ms ease",
        width: "100vw",
        height: "100vh",
        padding: "0 20px",
        background: theme.palette.background.default,
      }}
    >
      <IconButton
        onClick={onClose}
        color="primary"
        sx={{ position: "absolute", right: "10px", top: "5px" }}
      >
        <CloseIcon />
      </IconButton>
      <Loading visible={loading} />
      {render !== null && (
        <Box>
          {images.length === 1 ? (
            <Container
              justify="center"
              sx={{
                img: imgSX,
              }}
            >
              <Image img={images[0].url} />
            </Container>
          ) : (
            <Box>
              <Carousel
                sx={{ height: "100vh", display: "flex", alignItems: "center" }}
                items={render}
                navigation
                pagination={false}
                backgroundColor={theme.palette.secondary.carousel}
              />
            </Box>
          )}
        </Box>
      )}
    </Container>
  );
}

LightBox.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default LightBox;
