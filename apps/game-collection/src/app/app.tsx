import * as React from "react";
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
      <Routes>
        <Route path={RouteNames.HOME_PAGE} element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
