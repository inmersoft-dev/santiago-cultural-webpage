/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/function-component-definition */

// framer-motion
import { motion } from "framer-motion";

// prop types
import PropTypes from "prop-types";

// @mui components
import { Box, Typography } from "@mui/material";

// own components
import Container from "components/Container/Container";

// !!uikit
import "./uikit/css/uikit.css";

const ScrollView = (props) => {
  const { title, content, sx } = props;

  const newSx = {
    padding: "60px 0",
    paddingLeft: "10rem",
    ...sx,
  };

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const ulItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <Container direction="column" sx={newSx}>
      <Typography variant="subtitle1" sx={{ marginBottom: "20px" }}>
        {title}
      </Typography>
      <div className="uk-position-relative uk-visible-toggle" data-tabindex="-1" data-uk-slider>
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m uk-grid"
        >
          {content.map((item, i) => (
            <motion.li variants={ulItem} viewport={{ once: true }} key={`s${i}`}>
              <Box className="uk-panel" sx={{ width: "390px", marginRight: "40px" }}>
                {item}
              </Box>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </Container>
  );
};

ScrollView.defaultProps = {
  sx: {},
  title: "",
};

ScrollView.propTypes = {
  sx: PropTypes.object,
  title: PropTypes.string,
  content: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default ScrollView;
