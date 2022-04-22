/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */

import React from "react";

// Import @mui component
import { Box, Button, Typography, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

// Import css component
import "./search.css";

const text = "Noticias";

const Search = () => {
  const theme = useTheme();
  return (
    <Box
      className="search__container"
      sx={{
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <div className="search__title-container">
        <Typography variant="h4">{text}</Typography>
      </div>
      <Box className="search__search-area-container" sx={{ mt: 2 }}>
        <Box className="search__input-container" sx={{ backgroundColor: "rgba(175,106,0, .4)" }}>
          <SearchIcon />
          <input className="search__search-input" type="search" />
        </Box>
        <Button
          className="search__search-area-button"
          variant="contained"
          sx={{
            mx: 2,
            backgroundColor: theme.palette.secondary.main,
            textTransform: "capitalize",
            fontWeight: "bold",
          }}
        >
          Buscar
        </Button>
      </Box>
    </Box>
  );
};

export default Search;
