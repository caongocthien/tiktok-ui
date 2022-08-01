import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import { DefaultLayout } from "./components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((r, index) => {
          // const Layout = r.layout === null ? Fragment : DefaultLayout;
          let Layout = DefaultLayout;
          if (r.layout) {
            Layout = r.layout;
          } else if (r.layout === null) {
            Layout = Fragment;
          }
          return (
            <Route
              key={index}
              path={r.path}
              element={
                <Layout>
                  <r.component />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
