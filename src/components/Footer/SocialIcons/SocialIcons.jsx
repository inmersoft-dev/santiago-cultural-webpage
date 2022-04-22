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
        href="https://www.facebook.com/inmersoftstudio"
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
        href="https://twitter.com/Inmersoft_"
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
        href="https://www.instagram.com/inmersoft/"
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
        href="https://www.linkedin.com/company/inmersoft/"
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
