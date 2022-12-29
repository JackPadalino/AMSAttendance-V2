import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NotFoundPage } from ".";
import { setDate,setDay,setAllAbsences } from "../store/adminSlice";
import { useSelector, useDispatch } from "react-redux";

const AdminAbsences = () => {
    const dispatch = useDispatch();
    const { date,day,allAbsences } = useSelector((state) => state.admin);
    const [token, setToken] = useState(window.localStorage.getItem("token"));

    const handleDateChange = async(event) => {
        const newDate = event.target.value;
        //const newDay = await axios.get(`/api/day/${newDate}`);
        const absences = await axios.get(`/api/attendance/absences/${newDate}`);
        const userPromises = absences.data.map(absence => axios.get(`/api/users/${absence.user.id}`));
        const userResponses = await Promise.all(userPromises);
        const userAbsences = userResponses.map(response => response.data);
        dispatch(setDate(newDate));
        //dispatch(setDay(newDay.data));
        dispatch(setAllAbsences(userAbsences));
    };

    if(!token) return <NotFoundPage/>
    return (
        <div>
            <input type="date" id="date" value={date} onChange={handleDateChange}></input>
            <h1>Attendance {date}</h1>
            <div>
                {allAbsences.length>0 && allAbsences.map((user) => {
                    return (
                        <div key={user.id}>
                            <p>{user.firstName} {user.lastName}</p>
                            <ul>
                                {user.classes.map((eachClass) => {
                                    return (
                                        !eachClass.isFreePeriod && <li key={eachClass.id}><Link to={`/coverages/${date}/${eachClass.id}`}>{eachClass.name} - P{eachClass.period}</Link></li>
                                    )
                                })}
                            </ul>
                        </div>  
                    );
                })}
                {allAbsences.length===0 && <p>Looks like there is no information about this date.</p>}
            </div>
        </div>
    );
};

export default AdminAbsences;