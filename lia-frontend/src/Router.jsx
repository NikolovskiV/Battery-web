import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/ layout/Layout";
import { Fragment } from "react";
import BatteryTool from "./pages/BatteryTool";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page3";
import Page5 from "./pages/Page3";
import Page6 from "./pages/Page3";
import Page7 from "./pages/Page3";
import Statistics from "./pages/Statistics";
import AuthContext from "./context/AuthContext";
import Result from "./pages/Result";
import ProductList from "./pages/ProductList";
import BatteryScreen from "./screens/BatteryScreen";
import BatteryEditScreen from "./pages/BatteryEditScreen";

function Router() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Fragment>
            <Route path="/" element={<BatteryTool />} exact />
            {loggedIn === false && (
              <>
                <Route path="register" element={<Page1 />} />
                <Route path="login" element={<Page2 />} />
                <Route path="home" element={<Page3 />} />
                <Route path="products" element={<Page4 />} />
                <Route path="services" element={<Page5 />} />
                <Route path="contact" element={<Page6 />} />
                <Route path="about" element={<Page7 />} />
                <Route path="/result" element={<Result />} />
              </>
            )}
            {loggedIn === true && (
              <>
                <Route path="page3" element={<Page3 />} />
                <Route path="statistics" element={<Statistics />} />
                <Route path="/product" element={<ProductList />} />
                <Route path="/battery/:id" element={<BatteryScreen />} exact />
                <Route
                  path="/battery/:id/edit"
                  element={<BatteryEditScreen />}
                  exact
                />
              </>
            )}
            <Route path="statistic" element={<Statistics />} />
            <Route path="/product" element={<ProductList />} />
            <Route path="/battery/:id" element={<BatteryScreen />} exact />
            <Route
              path="/battery/:id/edit"
              element={<BatteryEditScreen />}
              exact
            />
          </Fragment>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
