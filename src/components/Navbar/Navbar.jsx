/* eslint-disable react/function-component-definition */
import { useEffect, useState } from "react";

// @mui components
import { useTheme, AppBar, Box, Button, IconButton, Divider } from "@mui/material";

// @mui icons
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

// contexts
import { useLanguage } from "context/LanguageProvider";
import { useRoute } from "context/RouterProvider";
import { Link } from "react-router-dom";

// images
import logo from "assets/images/logo.png";

// own components
import Image from "components/Image/Image";
import Container from "components/Container/Container";
import SearchModal from "./SearchModal/SearchModal";

const Navbar = () => {
  const { routeState, setRouteState } = useRoute();
  const { languageState } = useLanguage();
  const theme = useTheme();

  const [showSearch, setShowSearch] = useState(false);

  const handleLink = (e) => {
    const { id } = e.target;
    setRouteState({ type: "set", to: Number(id) });
  };

  const toggleSearch = () => {
    setShowSearch(true);
  };

  const onCloseDrawer = (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setShowSearch(false);
  };

  useEffect(() => {}, [routeState.route]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <SearchModal visible={showSearch} onClose={onCloseDrawer} />
      <AppBar
        style={{ transition: "all 200ms ease", padding: "20px 0", opacity: showSearch ? 0 : 1 }}
        elevation={0}
        position="static"
        color="secondary"
      >
        <Container justify="space-between" sx={{ padding: "0 10rem" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { lg: "none", md: "initial" } }}
          >
            <MenuIcon />
          </IconButton>
          <Image img={logo} width={120} height={40} />
          <Container>
            <Box sx={{ display: { md: "none", lg: "flex" } }}>
              {languageState.texts.Navbar.Links.map((item, i) => (
                <Container key={item.id} align="center">
                  <Link style={{ textDecoration: "none" }} to={item.route}>
                    <Button
                      id={`b${i}`}
                      onClick={handleLink}
                      color={i === routeState.route ? "primary" : "text"}
                      sx={{ textTransform: "none" }}
                      size="medium"
                    >
                      {item.label}
                    </Button>
                  </Link>
                  {i < languageState.texts.Navbar.Links.length - 1 && (
                    <Divider
                      sx={{
                        border: "1px solid",
                        height: "25px",
                        margin: "auto 5px",
                        color: theme.palette.text.disabled,
                      }}
                      orientation="vertical"
                      variant="middle"
                      flexItem
                    />
                  )}
                </Container>
              ))}
            </Box>
            <Button
              sx={{
                marginLeft: "40px",
                mr: 2,
                padding: "5px 0px",
                borderRadius: "10px",
                minWidth: "45px",
              }}
              size="large"
              color="side"
              aria-label="search"
              onClick={toggleSearch}
            >
              <SearchIcon />
            </Button>
          </Container>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
