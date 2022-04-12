/* eslint-disable react/function-component-definition */
import { useState, useEffect } from "react";

// @mui components
import { Box, Button } from "@mui/material";

// context
import { useRoute } from "context/RouterProvider";

const Footer = () => {
  const { routeState } = useRoute();
  const [drawer, setDrawer] = useState(false);

  const open = () => {
    setDrawer(!open);
  };

  useEffect(() => {}, [routeState]);

  return (
    <Box>
      Footer
      <Button onClick={open}>Open Drawer</Button>
      {drawer && <Box>Drawer</Box>}
    </Box>
  );
};

export default Footer;
