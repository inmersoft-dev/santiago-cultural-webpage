/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/function-component-definition */

// framer-motion
import { motion } from "framer-motion";

// prop types
import PropTypes from "prop-types";

// @mui components
import { Grid as MuiGrid } from "@mui/material";

const Grid = (props) => {
  const { content, sx } = props;

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
    <MuiGrid sx={{ ...sx, flexGrow: 1 }} container spacing={0}>
      <MuiGrid item>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <MuiGrid container justifyContent="center" spacing={0}>
            {content.map((item, i) => (
              <MuiGrid key={`grid${i}`} sx={{ paddingRight: 0, marginBottom: "30px" }} item>
                <motion.div variants={ulItem} viewport={{ once: true }}>
                  {item}
                </motion.div>
              </MuiGrid>
            ))}
          </MuiGrid>
        </motion.div>
      </MuiGrid>
    </MuiGrid>
  );
};

Grid.defaultProps = {
  sx: {},
};

Grid.propTypes = {
  content: PropTypes.arrayOf(PropTypes.node).isRequired,
  sx: PropTypes.object,
};

export default Grid;
