import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Home,
  Login,
  Absences,
  Teachers,
  Classes,
  SingleClass
} from ".";

const RouterComponent = () => {

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/admin/absences" element={<Absences />} />
      <Route exact path="/admin/add-teacher" element={<Teachers />} />
      <Route exact path="/admin/add-class" element={<Classes />} />
      <Route exact path="/coverages/:dateStr/:classId" element={<SingleClass />} />
    </Routes>
  );
};

export default RouterComponent;
