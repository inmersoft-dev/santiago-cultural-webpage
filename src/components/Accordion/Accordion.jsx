/* eslint-disable react/no-array-index-key */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/forbid-prop-types */
// prop types
import PropTypes from "prop-types";

// @mui components
import {
  Accordion as MuiAccordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material/";

// @mui icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Accordion = (props) => {
  const { title, details } = props;
  return (
    <MuiAccordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {details.map((item, i) => (
          <Box key={i}>{item}</Box>
        ))}
      </AccordionDetails>
    </MuiAccordion>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  details: PropTypes.array.isRequired,
};

export default Accordion;
