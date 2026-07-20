import './App.css'
import HeaderDiv from './Components/Header';
import MainframeBasics from './Components/MainframeBasics';
import MainPage from './Components/MainPage'
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<MainPage 
                        header={<HeaderDiv />}
                />} 
        />
        <Route path='/mainframeBasics' element={<MainframeBasics header={<HeaderDiv />} />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
