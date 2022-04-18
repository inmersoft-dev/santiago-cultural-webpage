/* eslint-disable react/function-component-definition */
// @mui components
import { Typography, useTheme } from "@mui/material";

// own components
import Container from "components/Container/Container";

// context
import { useLanguage } from "context/LanguageProvider";

const CopyrightRow = () => {
  const { languageState } = useLanguage();
  const theme = useTheme();

  return (
    <Container
      sx={{ width: "100%", background: theme.palette.secondary.special, padding: "20px" }}
      justify="center"
    >
      <Typography variant="subtitle1" align="center">
        {languageState.texts.Footer.Copyright}
      </Typography>
    </Container>
  );
};

export default CopyrightRow;
