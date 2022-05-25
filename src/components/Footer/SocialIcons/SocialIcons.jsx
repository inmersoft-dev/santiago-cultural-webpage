/* eslint-disable react/function-component-definition */
// @mui components
import { useTheme, IconButton, Link } from "@mui/material";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// own components
import Container from "components/Container/Container";

const SocialIcons = () => {
  const theme = useTheme();

  return (
    <Container sx={{ marginTop: "20px" }}>
      <Link
        target="_blank"
        rel="noreferrer"
        href="https://www.facebook.com/Cine-Service-Group-131315229117003"
        sx={{ marginRight: "20px" }}
      >
        <IconButton
          sx={{
            border: `1px solid ${theme.palette.text.disabled}`,
            color: theme.palette.text.disabled,
          }}
          color="side"
          aria-label="facebook"
        >
          <FacebookIcon fontSize="small" />
        </IconButton>
      </Link>
      <Link
        target="_blank"
        rel="noreferrer"
        href="https://twitter.com/cineserviceg"
        sx={{ marginRight: "20px" }}
      >
        <IconButton
          sx={{
            border: `1px solid ${theme.palette.text.disabled}`,
            color: theme.palette.text.disabled,
          }}
          color="side"
          aria-label="twitter"
        >
          <TwitterIcon fontSize="small" />
        </IconButton>
      </Link>
      <Link
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/insectarefeed/"
        sx={{ marginRight: "20px" }}
      >
        <IconButton
          sx={{
            border: `1px solid ${theme.palette.text.disabled}`,
            color: theme.palette.text.disabled,
          }}
          color="side"
          aria-label="instagram"
        >
          <InstagramIcon fontSize="small" />
        </IconButton>
      </Link>
      <Link
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/company/cine-service-group?lipi=urn%3Ali%3Apage%3Acompanies_company_index%3BRFpk7qr9S7aLCSP6edwJQg%3D%3D"
        sx={{ marginRight: "20px" }}
      >
        <IconButton
          sx={{
            border: `1px solid ${theme.palette.text.disabled}`,
            color: theme.palette.text.disabled,
          }}
          color="side"
          aria-label="linkedin"
        >
          <LinkedInIcon fontSize="small" />
        </IconButton>
      </Link>
    </Container>
  );
};

export default SocialIcons;
