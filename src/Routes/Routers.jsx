import { Routes, Route } from "react-router-dom";
import { Admin } from "../Components/Admin";
import { AppointmentPage } from "../Components/AppointmentPage";

import { Home } from "../Components/Home";
import { Navbar } from "../Components/Navbar";

export const Routers = () => {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment/:id" element={<AppointmentPage />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </>
    )
}