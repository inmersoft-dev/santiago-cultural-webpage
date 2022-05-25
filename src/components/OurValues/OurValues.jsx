/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */

// @mui components
import { Box, Typography, Divider, useTheme } from "@mui/material";

// context
import { useLanguage } from "context/LanguageProvider";

// own components
import ValueItem from "./ValueItem/ValueItem";

// Import Css of component
import "./our-values.css";

const OurValues = () => {
  const { languageState } = useLanguage();

  const theme = useTheme();
  return (
    <Box className="our-values__container" sx={{ backgroundColor: theme.palette.primary.main }}>
      <Box className="our-values__title-container">
        <Typography
          variant="h4"
          sx={{ color: theme.palette.secondary.main, fontWeight: "bold", textAlign: "center" }}
        >
          {languageState.texts.AboutUs.Values.Title}
        </Typography>
        <Divider
          sx={{
            borderWidth: " 1px",
            borderStyle: "solid",
            borderColor: "#ffd8a3",
            width: "150px",
            mb: 2,
          }}
        />
      </Box>
      <Box className="our-values__values-items-container">
        {languageState.texts.AboutUs.Values.Values.map((item, i) => (
          <ValueItem key={i.Title} content={item} />
        ))}
      </Box>
    </Box>
  );
};

export default OurValues;
