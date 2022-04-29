import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ROUTES from "router";
import { Layout } from "components";

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Routes>
            {ROUTES.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
