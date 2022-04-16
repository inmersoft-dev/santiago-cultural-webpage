/* eslint-disable react/function-component-definition */
import { useEffect, useState } from "react";

// @mui components
import {
  Box,
  Typography,
  Divider,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Button,
  useTheme,
} from "@mui/material";

// owm components
import Container from "components/Container/Container";

// contexts
import { useLanguage } from "context/LanguageProvider";

const Hero = () => {
  const { languageState } = useLanguage();
  const theme = useTheme();

  const [active, setActive] = useState(0);

  const handleRadio = (e) => {
    const { id } = e.target;
    setActive(Number(id.substring(1)));
  };

  useEffect(() => {}, []);
  return (
    <Box id="map-filter" sx={{ background: theme.palette.primary.main }}>
      <Box sx={{ padding: { md: "40px 10rem", xs: "40px 40px" } }}>
        <Box>
          <Typography variant="h4" color="secondary">
            {languageState.texts.Activities.Title}
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 700 }} color="secondary">
            {languageState.texts.Activities.Subtitle}
          </Typography>
        </Box>
        <Box sx={{ paddingBottom: "20px" }}>
          <Container
            sx={{ margin: "40px", marginBottom: "15px" }}
            justify="space-between"
            align="end"
          >
            <FormControl>
              <Typography variant="h5" color="secondary" sx={{ fontWeight: 700 }}>
                {languageState.texts.Activities.Filter.Title}
              </Typography>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                sx={{ marginTop: "10px" }}
                name="row-radio-buttons-group"
              >
                {languageState.texts.Activities.Filter.Radios.map((item) => (
                  <FormControlLabel
                    key={item.Filter}
                    value={item.Filter}
                    control={
                      <Radio
                        id={`r${item.Filter}`}
                        checked={active === item.Filter}
                        onChange={handleRadio}
                        color="secondary"
                      />
                    }
                    label={item.Label}
                  />
                ))}
              </RadioGroup>
            </FormControl>
            <Button sx={{ padding: "10px 20px" }} variant="contained" color="secondary">
              {languageState.texts.Activities.Filter.Button}
            </Button>
          </Container>
          <Divider sx={{ border: `1px solid ${theme.palette.secondary.main}` }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
