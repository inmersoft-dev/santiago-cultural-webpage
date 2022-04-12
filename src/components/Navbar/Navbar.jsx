/* eslint-disable react/function-component-definition */
import { useEffect } from "react";

// @mui components
import { useTheme, AppBar, Box, Button, IconButton, Divider, SearchIcon } from "@emotion/react";

// own components
import Image from "components/Image/Image";
import Container from "components/Container/Container";

// contexts
import { useLanguage } from "context/LanguageProvider";
import { useRoute } from "context/RouterProvider";
import { Link } from "react-router-dom";

// images
import logo from "assets/images/logo.png";

const Navbar = () => {
  const { routeState, setRouteState } = useRoute();
  const { languageState } = useLanguage();
  const theme = useTheme();

  const handleLink = (e) => {
    const { id } = e.target;
    setRouteState({ type: "set", to: Number(id) });
  };

  useEffect(() => {}, [routeState.route]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ padding: "20px 0" }} elevation={0} position="static" color="secondary">
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
                <>
                  <Link
                    style={{
                      textDecoration: "none",
                      display: "flex",
                    }}
                    key={item.id}
                    to={item.route}
                  >
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
                </>
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
