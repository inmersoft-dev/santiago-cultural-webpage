/* eslint-disable react/function-component-definition */
// @mui components
import { useTheme } from "@mui/material";

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
      {languageState.texts.Footer.Copyright}
    </Container>
  );
};

export default CopyrightRow;
