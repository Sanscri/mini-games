import * as React from "react";
import { ChakraProvider } from '@chakra-ui/react'
import Layout from "./layout/Layout";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {RouteNames} from "./routes/routes";
import HomePage from "./pages/HomePage";

export function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Routes>
          <Route path={RouteNames.HOME_PAGE} element={<Layout />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
