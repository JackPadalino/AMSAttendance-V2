import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link,useNavigate } from "react-router-dom";
import { resetUser } from "../store/userSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    window.localStorage.removeItem("token");
    dispatch(resetUser());
    navigate('/login');
  };

  return (
    <div>
        <Link to="/">Home</Link>
        {!user.id && <Link to="/login">Login</Link>}
        {user.id && <Link to="/admin/absences">Absences</Link>}
        {user.id && <Link to="/admin/add-teacher">Teachers</Link>}
        {user.id && <Link to="/admin/add-class">Classes</Link>}
        {user.id && <button onClick={logout}>Logout</button>}
    </div>
  );
};

export default Navbar;