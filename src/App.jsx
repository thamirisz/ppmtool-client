import "./App.css";
import Dashboard from "./components/Dashboard";
import NavBar from "./components/layout/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import AddProject from "./components/project/AddProject";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/addProject" element={<AddProject />} />
      </Routes>
    </div>
  );
}

export default App;
