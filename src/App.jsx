import { ThemeProvider } from "@mui/material/styles";
import theme from "./utilities/theme";
import { Route, Navigate, BrowserRouter, Routes } from "react-router-dom";
import SymptomChecker from "./pages/SymptomChecker";
import CancerDetector from "./pages/CancerDetector";
import Layout from "./layout";

function ComponentWithLayout({ Page }) {
  return (
    <Layout>
      <Page />
    </Layout>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Navigate replace to="/symptom_checker" />}
          />
          <Route
            path="/symptom_checker"
            element={<ComponentWithLayout Page={SymptomChecker} />}
          />
          <Route
            path="/cancer_detector"
            element={<ComponentWithLayout Page={CancerDetector} />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
