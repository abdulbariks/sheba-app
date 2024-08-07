import { Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage/Home";
import Login from "./pages/Login/Login";
import Services from "./pages/Services/Services";
import SignUp from "./pages/SignUp/SignUp";
import Staffs from "./pages/Staffs/Staffs";
import ServiceDetails from "./pages/Services/ServiceDetails";
import StaffDetails from "./pages/Staffs/StaffDetails";
import AuthProvider from "./context/AuthProvider";
import PrivateOutlet from "./components/PrivateOutlet";
import Dashboard from "./pages/Dashboard/dashboard";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service-details/:id" element={<ServiceDetails />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/staffs" element={<Staffs />} />
        <Route path="/staff-details/:id" element={<StaffDetails />} />

        <Route path="/" element={<PrivateOutlet />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
