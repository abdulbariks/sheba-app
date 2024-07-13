import { Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage/Home";
import Login from "./pages/Login/Login";
import Services from "./pages/Services/Services";
import SignUp from "./pages/SignUp/SignUp";
import Staffs from "./pages/Staffs/Staffs";
import ServiceDetails from "./pages/Services/ServiceDetails";
import StaffDetails from "./pages/Staffs/StaffDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/services" element={<Services />} />
      <Route path="/service-details/:id" element={<ServiceDetails />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/staffs" element={<Staffs />} />
      <Route path="/staff-details/:id" element={<StaffDetails />} />
    </Routes>
  );
}

export default App;
