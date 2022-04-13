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

  const { routeState } = useRoute();
  const { languageState } = useLanguage();
  const theme = useTheme();

  const [visibleState, setVisibleState] = useState(false);

  useEffect(() => {
    setVisibleState(visible);
  }, [visible]);

  useEffect(() => {}, [routeState.route]);

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
              <Link
                id={`l${i}`}
                key={item.id}
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
