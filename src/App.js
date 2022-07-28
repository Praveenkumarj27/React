import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Login" 
import Register from  "./Register"
import Dashboard from "./Dashboard"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
