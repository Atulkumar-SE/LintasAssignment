import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AssetMax from "./Components/AssetMax/AssetMax";
import Additional from "./Components/AssetMax/Additional";
import Dashboard from "./Components/AssetMax/Dashboard";
import Migrat from "./Components/AssetMax/Migrat";
import SideBar from "./Components/BasicBody/SideBar";

function App() {
  return (
    <>
      <Router>
        <SideBar>
          <Routes>
            <Route path="/" element={<AssetMax />} />
            <Route path="/Additional" element={<Additional />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Migrat" element={<Migrat />} />
          </Routes>
        </SideBar>
      </Router>
    </>
  );
}

export default App;
