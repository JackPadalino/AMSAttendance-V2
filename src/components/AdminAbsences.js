import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NotFoundPage } from ".";
import { setDate,setLetterDay,setDay,setAllAbsences,setCoveredClasses,resetCoveredClasses } from "../store/adminSlice";
import { useSelector, useDispatch } from "react-redux";

const AdminAbsences = () => {
    const dispatch = useDispatch();
    const { date,letterDay,day,coveredClasses,allAbsences } = useSelector((state) => state.admin);
    const [token, setToken] = useState(window.localStorage.getItem("token"));
    const [teacherId,setTeacherId] = useState(0);

    const handleDateChange = (event) => {
        const newDate = event.target.value;
        dispatch(setDate(newDate));
    };

    const handleLetterDayChange = (event) =>{
        const newLetterDay = event.target.value;
        dispatch(setLetterDay(newLetterDay));
    };

    const handleTeacherChange = (event) =>{
        const newTeacherId = event.target.value;
        setTeacherId(newTeacherId);
    };

    const getAbsences = async(event) =>{
        event.preventDefault();
        const absences = await axios.get(`/api/attendance/absences/${date}`);
        const userPromises = absences.data.map(absence => axios.get(`/api/users/${absence.user.id}`));
        const userResponses = await Promise.all(userPromises);
        const userAbsences = userResponses.map(response => response.data);
        dispatch(setAllAbsences(userAbsences));
        dispatch(resetCoveredClasses());
    };

    const getClasses = async(event) =>{
        event.preventDefault();
        const classes = await axios.get(`/api/classes/${teacherId}/${letterDay}`);
        dispatch(setCoveredClasses(classes.data));
    };

    if(!token) return <NotFoundPage/>
    return (
        <div>
            <form onSubmit={getAbsences}>
                <label htmlFor="date">Date</label>
                <input type="date" id="date" value={date} onChange={handleDateChange}></input>
                <input type='submit' value='Submit'/>
            </form>
            <h3>Absences {date}</h3>
            <div>
                {allAbsences.length>0 && allAbsences.map((user) => {
                    return (
                        <div key={user.id}>
                            <p>{user.firstName} {user.lastName}</p>
                        </div>  
                    );
                })}
                {allAbsences.length===0 && <p>Looks like there is no information about this date.</p>}
            </div>
            <h3>Needed coverages</h3>
            <form onSubmit={getClasses}>
                <label htmlFor="teacher">Teacher</label>
                <select name="teacher" id="teacher" onChange={handleTeacherChange}>
                    <option value="-">-</option>
                    {allAbsences.map((teacher) => {
                        return (
                            <option key={teacher.id} value={teacher.id}>{teacher.firstName} {teacher.lastName}</option>
                        );
                    })}
                </select>
                <label htmlFor="letter day">Letter day</label>
                <select name="letter day" id="letter day" value={letterDay} onChange={handleLetterDayChange}>
                    <option value="-">-</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                </select>
                <input type='submit' value='Submit'/>
            </form>
            <div>
                {coveredClasses.map((eachClass) => {
                    return (
                        <div key={eachClass.id}>
                            <p>{eachClass.name}</p>
                        </div>  
                    );
                })}
            </div>
        </div>
    );
};

export default AdminAbsences;