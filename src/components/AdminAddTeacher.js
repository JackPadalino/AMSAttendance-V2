import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NotFoundPage } from ".";
import { setDate,setDay,setAllAbsences } from "../store/adminSlice";
import { useSelector, useDispatch } from "react-redux";

const AdminAddTeacher = () => {
    const dispatch = useDispatch();
    const [token, setToken] = useState(window.localStorage.getItem("token"));

    if(!token) return <NotFoundPage/>
    return (
        <div>
            <h1>Add a teacher</h1>
        </div>
    );
};

export default AdminAddTeacher;