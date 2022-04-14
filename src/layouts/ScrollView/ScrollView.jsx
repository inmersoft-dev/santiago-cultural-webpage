/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/function-component-definition */
// prop types
import PropTypes from "prop-types";

// @mui components
import { Typography } from "@mui/material";

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

  return (
    <Container direction="column" sx={newSx}>
      <Typography variant="subtitle1" sx={{ marginBottom: "20px" }}>
        {title}
      </Typography>
      <div className="uk-position-relative uk-visible-toggle" data-tabindex="-1" data-uk-slider>
        <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m uk-grid">
          {content.map((item, i) => (
            <li key={`s${i}`} style={{ width: "400px", marginRight: "40px" }}>
              <div className="uk-panel">{item}</div>
            </li>
          ))}
        </ul>
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
