/* eslint-disable react/function-component-definition */
import { useEffect, useState } from "react";

// react-router-dom
import { Link } from "react-router-dom";

// prop types
import PropTypes from "prop-types";

// @mui components
import { useTheme, Drawer, IconButton, Typography, Box } from "@mui/material";

// @mui icons
import CloseIcon from "@mui/icons-material/Close";

// images
import logo from "assets/images/logo.png";

// own components
import Image from "components/Image/Image";
import Container from "components/Container/Container";

// contexts
import { useLanguage } from "context/LanguageProvider";
import { useRoute } from "context/RouterProvider";

const NavigationDrawer = (props) => {
  const { visible, onClose } = props;

  const { routeState, setRouteState } = useRoute();
  const { languageState } = useLanguage();
  const theme = useTheme();

  const [visibleState, setVisibleState] = useState(false);

  useEffect(() => {
    setVisibleState(visible);
  }, [visible]);

  useEffect(() => {}, [routeState.route]);

  const clickJtem = (e) => {
    const { id } = e.target;
    setRouteState({ type: "jndex", to: Number(id.substring(1)) });
    onClose(e);
  };

  return (
    <Drawer
      sx={{ background: `${theme.palette.secondary.main}9c` }}
      anchor="left"
      open={visibleState}
      onClose={onClose}
    >
      <Container
        direction="column"
        sx={{
          background: theme.palette.secondary.main,
          padding: "40px",
          width: "400px",
          height: "100%",
        }}
      >
        <Container sx={{ width: "100%" }} justify="flex-end">
          <IconButton color="side" aria-label="close drawer" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Container>
        <Container direction="column">
          <Image img={logo} width={120} height={40} />
          <Box sx={{ marginTop: "20px" }}>
            {languageState.texts.Navbar.Links.map((item, i) => (
              <Box key={item.id}>
                <Link
                  id={`l${i}`}
                  style={{
                    textDecoration: "none",
                    color:
                      item.index === routeState.route
                        ? theme.palette.primary.main
                        : theme.palette.text.main,
                  }}
                  onClick={onClose}
                  to={item.route}
                >
                  <Typography
                    id={`b${i}`}
                    sx={{
                      textTransform: "none",
                      marginTop: "10px",
                      "&:hover": {
                        color:
                          item.index === routeState.route
                            ? theme.palette.primary.main
                            : theme.palette.text.disabled,
                      },
                    }}
                    variant="subtitle1"
                  >
                    {item.label}
                  </Typography>
                </Link>
                {item.menu && (
                  <Container direction="column">
                    {item.menu.map((jtem, j) => (
                      <Link
                        id={`l${j}`}
                        key={jtem.jndex}
                        style={{
                          textDecoration: "none",
                          paddingLeft: "10px",
                          paddingTop: "10px",
                        }}
                        onClick={clickJtem}
                        to={item.route}
                      >
                        <Typography
                          id={`b${j}`}
                          sx={{
                            textTransform: "none",
                            color:
                              item.index === routeState.route && jtem.jndex === routeState.jndex
                                ? theme.palette.primary.main
                                : theme.palette.text.main,
                            "&:hover": {
                              color:
                                item.index === routeState.route && jtem.jndex === routeState.jndex
                                  ? theme.palette.primary.main
                                  : theme.palette.text.disabled,
                            },
                          }}
                          variant="subtitle2  "
                        >
                          {jtem.label}
                        </Typography>
                      </Link>
                    ))}
                  </Container>
                )}
              </Box>
            ))}
          </Box>
        </Container>
      </Container>
    </Drawer>
  );
};

NavigationDrawer.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default NavigationDrawer;
