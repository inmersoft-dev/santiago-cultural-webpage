/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
// prop types
import PropTypes from "prop-types";

// @mui components
import { Box, Button, Typography, useTheme } from "@mui/material";

// @mui icons
import SearchIcon from "@mui/icons-material/Search";

// Import css component
import "./search.css";

const text = "Noticias";

const Search = (props) => {
  const { onChange, value } = props;
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
          <input onChange={onChange} value={value} className="search__search-input" type="search" />
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

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Search;
