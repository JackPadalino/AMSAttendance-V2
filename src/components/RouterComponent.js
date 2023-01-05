import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  Absences,
  Teachers,
  Classes,
  AvailableCoverages,
  SingleTeacher,
  SingleClass
} from ".";

const RouterComponent = () => {

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/absences" element={<Absences />} />
      <Route exact path="/teachers" element={<Teachers />} />
      <Route exact path="/teachers/:id" element={<SingleTeacher />} />
      <Route exact path="/classes" element={<Classes />} />
      <Route exact path="/classes/:id" element={<SingleClass />} />
      <Route exact path="/coverages/:school/:period/:letter" element={<AvailableCoverages />} />
    </Routes>
  );
};

export default RouterComponent;
