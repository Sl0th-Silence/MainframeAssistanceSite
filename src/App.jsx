import "./App.css";
import Terms from "./Components/Terminology";
import JCL from "./Components/JCL";
import AdvancedCobol from "./Components/AdvancedCobol";
import Cobol from "./Components/Cobol";
import HeaderDiv from "./Components/Header";
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
          <Route path="/" element={<MainPage header={<HeaderDiv />} />} />
          <Route
            path="/mainframeBasics"
            element={<MainframeBasics header={<HeaderDiv />} />}
          />
          <Route path="/ispf" element={<ISPFBasics header={<HeaderDiv />} />} />
          <Route path="/cobol" element={<Cobol header={<HeaderDiv />} />} />
          <Route
            path="/advancedCobol"
            element={<AdvancedCobol header={<HeaderDiv />} />}
          />
          <Route path="/jcl" element={<JCL header={<HeaderDiv />} />} />
          <Route path="/terms" element={<Terms header={<HeaderDiv />} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
