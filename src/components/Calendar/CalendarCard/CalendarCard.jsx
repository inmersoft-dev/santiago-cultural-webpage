/* eslint-disable react/function-component-definition */

// @mui components
import { useTheme, Paper } from "@mui/material";

// prop types
import PropTypes from "prop-types";

const CalendarCard = (props) => {
  const { children, background } = props;

  const theme = useTheme();

  return (
    <Paper
      elevation={0}
      sx={{
        padding: "10px",
        minWidth: "150px",
        minHeight: "150px",
        background: background ? `${theme.palette.secondary.dark}Ac` : "#00000000",
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: 0,
      }}
    >
      {children}
    </Paper>
  );
};

CalendarCard.defaultProps = {
  background: false,
};

CalendarCard.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.bool,
};

export default CalendarCard;
