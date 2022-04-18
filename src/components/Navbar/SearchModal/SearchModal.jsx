/* eslint-disable react/function-component-definition */

import { useEffect, useState } from "react";

// prop types
import PropTypes from "prop-types";

// @mui components
import {
  Box,
  Drawer,
  FormControl,
  Input,
  InputLabel,
  InputAdornment,
  IconButton,
  Divider,
  useTheme,
} from "@mui/material";

// own components
import Container from "components/Container/Container";

// @mui icons
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";

// context
import { useLanguage } from "context/LanguageProvider";

const SearchModal = (props) => {
  const { visible, onClose } = props;

  const { languageState } = useLanguage();
  const theme = useTheme();

  const [visibleState, setVisibleState] = useState(false);
  const [toSearch, setToSearch] = useState("");
  const [divider, setDivider] = useState(true);

  const hideDivider = () => setDivider(false);
  const showDivider = () => setDivider(true);

  const handleInput = (e) => {
    const { value } = e.target;
    setToSearch(value);
  };

  const goSearch = () => {};

  useEffect(() => {
    setVisibleState(visible);
  }, [visible]);

  return (
    <Drawer
      sx={{ background: `${theme.palette.secondary.main}9c` }}
      anchor="top"
      open={visibleState}
      onClose={onClose}
    >
      <Box sx={{ background: theme.palette.secondary.main }}>
        <Container
          sx={{ width: "100%", padding: { md: "40px 10rem", xs: "20px 20px" } }}
          justify="flex-end"
        >
          <IconButton color="side" aria-label="close drawer" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Container>
        <Container sx={{ width: "100%", padding: { md: "40px 10rem", xs: "20px 20px" } }}>
          <FormControl sx={{ m: 1, width: "100%" }} variant="standard">
            <InputLabel
              sx={{ color: theme.palette.secondary.light, display: "flex" }}
              htmlFor="standard-adornment-password"
            >
              {divider && (
                <Divider
                  sx={{
                    border: "1px solid",
                    height: "25px",
                    margin: "auto",
                    marginTop: "-5px",
                    marginRight: "5px",
                    color: theme.palette.secondary.light,
                  }}
                  orientation="vertical"
                  variant="middle"
                  flexItem
                />
              )}
              {languageState.texts.Navbar.SearchModal.Label}
            </InputLabel>

            <Input
              id="standard-adornment-password"
              type="text"
              value={toSearch}
              onChange={handleInput}
              onFocus={hideDivider}
              onBlur={showDivider}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton color="side" aria-label="search" onClick={goSearch}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Container>
      </Box>
    </Drawer>
  );
};

SearchModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SearchModal;
