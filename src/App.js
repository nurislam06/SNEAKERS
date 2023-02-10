import { Routes, Route } from "react-router-dom";
import Home from "./companents/Home";
import Login from "./companents/Login";
import Registration from "./companents/Registartion";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
