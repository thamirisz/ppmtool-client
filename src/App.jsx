import "./App.css";
import Dashboard from "./components/Dashboard";
import NavBar from "./components/layout/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Dashboard />
    </div>
  );
}

export default App;
