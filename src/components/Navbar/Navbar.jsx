/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/function-component-definition */
import { useEffect, useState, useRef } from "react";

// react-router-dom
import { Link } from "react-router-dom";

// @mui components
import {
  useTheme,
  AppBar,
  Box,
  Button,
  IconButton,
  Divider,
  MenuItem,
  MenuList,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
} from "@mui/material";

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

let timeout = null;

const Navbar = () => {
  const { routeState, setRouteState } = useRoute();
  const { languageState } = useLanguage();
  const theme = useTheme();

  const [onScroll, setOnScroll] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const [menu, setMenu] = useState(-1);
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setMenu(3);
    setOpen((prevOpen) => !prevOpen);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const handleClose = (event) => {
    if (event.type === "click") {
      const { id } = event.target;
      setRouteState({ type: "jndex", to: Number(id.substring(2)) });
    }
    if (anchorRef.current && anchorRef.current.contains(event.target)) return;

    setOpen(false);
  };

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

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

  const toggleOnScroll = () => {
    setOnScroll(true);
  };

  // scroll handler
  useEffect(() => {
    window.addEventListener("scroll", toggleOnScroll);
    return () => {
      window.removeEventListener("scroll", toggleOnScroll);
    };
  }, []);

  useEffect(() => {
    if (onScroll) clearTimeout(timeout);
    timeout = setTimeout(() => {
      setOnScroll(false);
    }, 505);
  }, [onScroll]);

  return (
    <Box sx={{ flexGrow: 1, width: "100vw", position: "absolute" }}>
      <SearchModal visible={showSearch} onClose={onCloseSearch} />
      <NavigationDrawer visible={showDrawer} onClose={onCloseDrawer} />
      <AppBar
        sx={{
          transition: "all 500ms ease",
          padding: "20px 0",
          opacity: showSearch ? 0 : 1,
          transform: onScroll ? "translateY(-80px)" : "translateY(0)",
        }}
        elevation={0}
        position="fixed"
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
                      ref={item.menu ? anchorRef : null}
                      aria-controls={open ? "composition-menu" : undefined}
                      aria-expanded={open ? "true" : undefined}
                      aria-haspopup="true"
                      onMouseOver={item.menu ? handleToggle : null}
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
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
          onMouseLeave={handleClose}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper sx={{ background: theme.palette.secondary.main }}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    {languageState.texts.Navbar.Links[menu].menu.map((item) => (
                      <Link
                        key={item.label}
                        to={languageState.texts.Navbar.Links[menu].route}
                        style={{ textDecoration: "none" }}
                      >
                        <MenuItem
                          onClick={handleClose}
                          id={`ml${item.jndex}`}
                          sx={{ color: theme.palette.text.main }}
                        >
                          {item.label}
                        </MenuItem>
                      </Link>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </AppBar>
    </Box>
  );
};

export default Navbar;
