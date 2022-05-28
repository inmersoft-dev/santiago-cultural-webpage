/* eslint-disable react/function-component-definition */
// prop types
import PropTypes from "prop-types";

// @mui icons
import IosShareIcon from "@mui/icons-material/IosShare";

// @mui components
import { useTheme, Typography, Link } from "@mui/material";

// own components
import Container from "components/Container/Container";

// contexts
import { useLanguage } from "context/LanguageProvider";

const ContactInfo = (props) => {
  const { languageState } = useLanguage();

  const theme = useTheme();

  const { phone, web } = props;

  return (
    <Container align="center" sx={{ width: "100%", flexDirection: "column", marginTop: "50px" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        {languageState.texts.Details.Labels.Contact}
      </Typography>
      {phone !== "" && (
        <Link
          href={`tel:${phone}`}
          sx={{
            color: theme.palette.primary.contrastText,
            textDecoration: "none",
            margin: "10px 0",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            {phone}
          </Typography>
        </Link>
      )}
      {web !== "" && (
        <Link
          href={web}
          target="_blank"
          rel="noopener"
          sx={{ textDecoration: "none", display: "flex" }}
        >
          <Typography variant="h5" sx={{ color: theme.palette.primary.dark, fontWeight: "500" }}>
            {web}
          </Typography>
          <IosShareIcon sx={{ marginLeft: "10px" }} />
        </Link>
      )}
    </Container>
  );
};

ContactInfo.defaultProps = {
  phone: "",
  web: "",
};

ContactInfo.propTypes = {
  phone: PropTypes.string,
  web: PropTypes.string,
};

export default ContactInfo;
