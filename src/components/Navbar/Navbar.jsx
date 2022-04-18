/* eslint-disable react/function-component-definition */
import { useEffect, useState } from "react";

// react-router-dom
import { Link } from "react-router-dom";

// @mui components
import { useTheme, AppBar, Box, Button, IconButton, Divider } from "@mui/material";

// @mui icons
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

// contexts
import { useLanguage } from "context/LanguageProvider";
import { useRoute } from "context/RouterProvider";

// images
import logo from "assets/images/logo.png";

// own components
import Image from "components/Image/Image";
import Container from "components/Container/Container";
import NavigationDrawer from "components/NavigationDrawer/NavigationDrawer";
import SearchModal from "./SearchModal/SearchModal";

const Navbar = () => {
  const { routeState, setRouteState } = useRoute();
  const { languageState } = useLanguage();
  const theme = useTheme();

  const [showSearch, setShowSearch] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  const handleLink = (e) => {
    const { id } = e.target;
    setRouteState({ type: "set", to: Number(id.substring(1)) });
  };

  const toggleSearch = () => {
    setShowSearch(true);
  };

  const onCloseSearch = (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setShowSearch(false);
  };

  const toggleDrawer = () => {
    setShowDrawer(true);
  };

  const onCloseDrawer = (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setShowDrawer(false);
  };

  useEffect(() => {}, [routeState.route]);

  return (
    <Box sx={{ flexGrow: 1, width: "100vw", position: "absolute" }}>
      <SearchModal visible={showSearch} onClose={onCloseSearch} />
      <NavigationDrawer visible={showDrawer} onClose={onCloseDrawer} />
      <AppBar
        style={{ transition: "all 200ms ease", padding: "20px 0", opacity: showSearch ? 0 : 1 }}
        elevation={0}
        position="static"
        color="secondary"
      >
        <Container
          align="center"
          justify="space-between"
          sx={{ padding: { lg: "0 10rem", xs: "0 20px" } }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { lg: "none", md: "flex", alignItems: "center" } }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Image img={logo} width={120} height={40} />
          <Container>
            <Box sx={{ display: { xs: "none", lg: "flex" } }}>
              {languageState.texts.Navbar.Links.map((item, i) => (
                <Container key={item.id} align="center">
                  <Link id={`l${i}`} style={{ textDecoration: "none" }} to={item.route}>
                    <Button
                      id={`b${i}`}
                      onClick={handleLink}
                      color={item.index === routeState.route ? "primary" : "text"}
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
                marginRight: "0",
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
