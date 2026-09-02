import "./App.css";
import Terms from "./Components/Terminology";
import JCL from "./Components/JCL";
import AdvancedCobol from "./Components/AdvancedCobol";
import Cobol from "./Components/Cobol";
import HeaderDiv from "./Components/Header";
import ISPFSearch from "./Components/ISPFSearch";
import ISPFBasics from "./Components/ISPFBasics";
import MainframeBasics from "./Components/MainframeBasics";
import MainPage from "./Components/MainPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <MainPage header={<HeaderDiv />} ISPFSearch={<ISPFSearch />} />
            }
          />
          <Route
            path="/mainframebasics"
            element={
              <MainframeBasics
                header={<HeaderDiv />}
                ISPFSearch={<ISPFSearch />}
              />
            }
          />
          <Route
            path="/ispf"
            element={
              <ISPFBasics header={<HeaderDiv />} ISPFSearch={<ISPFSearch />} />
            }
          />
          <Route
            path="/cobol"
            element={
              <Cobol header={<HeaderDiv />} ISPFSearch={<ISPFSearch />} />
            }
          />
          <Route
            path="/advancedcobol"
            element={
              <AdvancedCobol
                header={<HeaderDiv />}
                ISPFSearch={<ISPFSearch />}
              />
            }
          />
          <Route
            path="/jcl"
            element={<JCL header={<HeaderDiv />} ISPFSearch={<ISPFSearch />} />}
          />
          <Route
            path="/terms"
            element={
              <Terms header={<HeaderDiv />} ISPFSearch={<ISPFSearch />} />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
