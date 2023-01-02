import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Home,
  Login,
  AdminAbsences,
  AdminAddTeacher,
  AdminAddClass,
  SingleClass,
  NotFoundPage
} from ".";

const RouterComponent = () => {

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/admin/absences" element={<AdminAbsences />} />
      <Route exact path="/admin/coverages/:school/:period/:letter" element={<SingleClass />}/>
      <Route exact path="/admin/add-teacher" element={<AdminAddTeacher />} />
      <Route exact path="/admin/add-class" element={<AdminAddClass />} />
      <Route exact path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default RouterComponent;
