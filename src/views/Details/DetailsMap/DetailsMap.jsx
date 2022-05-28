/* eslint-disable react/function-component-definition */
// prop types
import PropTypes from "prop-types";

// @mui icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// @mui components
import { useTheme, Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";

// own components
import Container from "components/Container/Container";

// layouts
import Map from "layouts/MapFilter/Map/Map";

// contexts
import { useLanguage } from "context/LanguageProvider";

const DetailsMap = (props) => {
  const theme = useTheme();

  const { languageState } = useLanguage();

  const { services, location } = props;

  return (
    <Container sx={{ padding: { lg: "40px 0 40px 5rem", xs: "40px 0 40px 20px" } }}>
      <Container sx={{ flexDirection: "column", width: "50%" }}>
        {services && (
          <Accordion sx={{ background: "none", width: "100%" }} elevation={0}>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{ color: theme.palette.primary.contrastText, fontSize: "50px" }}
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Container sx={{ flexDirection: "column" }}>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", color: theme.palette.primary.dark }}
                >
                  {languageState.texts.Details.Labels.Services}
                </Typography>
              </Container>
            </AccordionSummary>
            <AccordionDetails>
              {services.map((item) => (
                <Container key={item} align="center" sx={{ marginBottom: "5px" }}>
                  <Typography
                    variant="h6"
                    sx={{ fontSize: "3.3rem", fontWeight: "bold", marginRight: "10px" }}
                  >
                    •
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {item}
                  </Typography>
                </Container>
              ))}
            </AccordionDetails>
          </Accordion>
        )}
      </Container>
      <Container sx={{ width: "50%" }}>
        <Map visible point={location} />
      </Container>
    </Container>
  );
};

DetailsMap.defaultProps = {
  services: [],
};

DetailsMap.propTypes = {
  services: PropTypes.arrayOf(PropTypes.string),
  location: PropTypes.string.isRequired,
};

export default DetailsMap;
