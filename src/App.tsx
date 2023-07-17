import { Button, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import customTheme from "./theme/theme";
import { Router } from "./Router/Router";

export default function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}
