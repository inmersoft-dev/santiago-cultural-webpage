/* eslint-disable react/function-component-definition */
import { useState, useEffect } from "react";

// @mui components
import { Box, Button } from "@mui/material";

// context
import { useRoutes } from "react-router-dom";

const Navbar = () => {
  const { routesState } = useRoutes();
  const [drawer, setDrawer] = useState(false);

  const open = () => {
    setDrawer(!open);
  };

  useEffect(() => {}, [routesState]);

  return (
    <Box>
      Navbar
      <Button onClick={open}>Open Drawer</Button>
      {drawer && <Box>Drawer</Box>}
    </Box>
  );
};

export default Navbar;
