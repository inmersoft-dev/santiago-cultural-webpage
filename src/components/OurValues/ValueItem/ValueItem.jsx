/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */

import PropTypes from "prop-types";

// @mui components
import { Box, Typography, useTheme } from "@mui/material";

// own components
import Image from "components/Image/Image";

// images
import excellence from "assets/images/trophy.png";
import integrity from "assets/images/integrity.png";
import leadership from "assets/images/leadership.png";
import diversity from "assets/images/diversity.png";
import diagram from "assets/images/diagram.png";
import stake from "assets/images/stake.png";

// styles
import "./value-item.css";

const ValueItem = (props) => {
  const { content } = props;

  const ValuesIcon = [excellence, integrity, leadership, diagram, diversity, stake];

  const theme = useTheme();
  return (
    <Box className="value-item__container">
      <div className="value-item__icon-container">
        <Box
          sx={{
            borderRadius: "100%",
            paddingTop: "8px",
            width: "50px",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            background: theme.palette.secondary.main,
          }}
        >
          <Image img={ValuesIcon[content.Icon]} width="35px" height="35px" />
        </Box>
      </div>
      <div className="value-item__text-container">
        <Typography
          variant="h5"
          sx={{ color: theme.palette.secondary.main, fontWeight: "bold", mb: 2 }}
        >
          {content.Title}
        </Typography>
        <Typography variant="body1">{content.Content}</Typography>
      </div>
    </Box>
  );
};

ValueItem.propTypes = {
  content: PropTypes.object.isRequired,
};

export default ValueItem;
