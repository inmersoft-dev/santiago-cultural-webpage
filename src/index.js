import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";

// context
import { ModeProvider } from "context/ModeProvider";
import { SearchProvider } from "context/SearchContext";
import { RouteProvider } from "context/RouterProvider";

// app
import App from "./App";

const container = document.getElementById("root");

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(
  <StrictMode>
    <ModeProvider>
      <SearchProvider>
        <RouteProvider>
          <App />
        </RouteProvider>
      </SearchProvider>
    </ModeProvider>
  </StrictMode>
);
