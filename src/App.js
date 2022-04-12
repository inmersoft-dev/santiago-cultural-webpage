/* eslint-disable react/function-component-definition */
import { useState, useEffect } from "react";

// langs
import es from "lang/es.json";

// storage-function
import { storageFunction } from "storage-function";

// react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// theme
import { ThemeProvider } from "@mui/material/styles";
import light from "assets/theme/light";
import dark from "assets/theme/dark";

// @mui components
import { Box, CssBaseline } from "@mui/material";

// own components
import BigLoading from "components/Loading/BigLoading";

// layout
import View from "layouts/View/View";

// views
import Home from "views/Home/Home";
import NotFound from "views/NotFound/NotFound";

// contexts
import { useMode } from "context/ModeProvider";

const App = () => {
  const { modeState, setModeState } = useMode();

  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    document.body.style.overflowX = "hidden";
    // local theme
    const localTheme = storageFunction.fromLocalStorage("mode");
    if (localTheme !== null) {
      const transpiledTheme = localTheme.substring(1, localTheme.length - 1);
      setModeState({ type: "set", to: transpiledTheme });
    }

    setLoading(false);
  };

  // fetching data from local storage
  useEffect(() => {
    document.body.style.transition = "all 200ms ease";
    fetchData();
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={modeState.mode === "light" ? light : dark}>
        <CssBaseline />
        <BigLoading visible={loading} />
        {!loading && (
          <Box className="App">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<View texts={es} />}>
                  <Route index element={<Home texts={es.Home} />} />
                  <Route path="*" element={<NotFound texts={es.NotFound} />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </Box>
        )}
      </ThemeProvider>
    </div>
  );
};

export default App;
