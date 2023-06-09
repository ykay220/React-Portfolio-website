import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme, CSSReset } from "@chakra-ui/react";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <CSSReset />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
