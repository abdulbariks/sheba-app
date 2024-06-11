import { Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage/Home";
import Login from "./pages/Login/Login";
import Services from "./pages/Services/Services";
import SignUp from "./pages/SignUp/SignUp";
import Staffs from "./pages/Staffs/Staffs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/services" element={<Services />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/staffs" element={<Staffs />} />
    </Routes>
  );
}

export default App;
