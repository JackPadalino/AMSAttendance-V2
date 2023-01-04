import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NotFoundPage } from "..";
import { setAllClasses } from "../../store/classSlice";
import { set,setDay,setAllAbsences } from "../../store/absenceSlice";
import { useSelector, useDispatch } from "react-redux";

const Classes = () => {
    const dispatch = useDispatch();
    const [token, setToken] = useState(window.localStorage.getItem("token"));
    const [name,setName] = useState('');
    const [school,setSchool] = useState('');
    const [grade,setGrade] = useState('');
    const [period,setPeriod] = useState('');
    const [letterDays,setLetterDays] = useState([]);
    
    const addClass = async(event) =>{
        event.preventDefault();
        const body = {
            name,
            school,
            grade,
            period,
            letterDays
        };
        await axios.post(`/api/classes`,body);
        const allClasses = await axios.get('/api/classes');
        dispatch(setAllClasses(allClasses.data));
    };

    const handleNameChange = (event) =>{
        setName(event.target.value);
    };

    const handleSchoolChange = (event) =>{
        setSchool(event.target.value);
    };

    const handleGradeChange = (event) =>{
        setGrade(event.target.value);
    };

    const handlePeriodChange = (event) =>{
        setPeriod(event.target.value);
    };

    const handleLetterDaysChange =(event)=>{
        if(letterDays.includes(event.target.value)){
            setLetterDays(letterDays.filter(day=>day!==event.target.value))
        }else{
            setLetterDays([...letterDays,event.target.value]);
        };
    };


    if(!token) return <NotFoundPage/>
    return (
        <div>
            <h1>Add a class</h1>
            <form onSubmit={addClass}>
                <div>
                    <input placeholder="Class name" onChange={handleNameChange}/>
                    <label htmlFor="school">MS/HS</label>
                    <select name='school' onChange={handleSchoolChange}>
                        <option value="-">-</option>
                        <option value="MS">MS</option>
                        <option value="HS">HS</option>
                    </select>
                    <label htmlFor="grade">Grade</label>
                    <select name='grade' onChange={handleGradeChange}>
                        <option value="-">-</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                    <label htmlFor="period">Period</label>
                    <select name='period' onChange={handlePeriodChange}>
                        <option value="-">-</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                    </select>
                </div>
                <div>
                    <input type="checkbox" name="A day" value="A" onChange={handleLetterDaysChange}/>
                    <label htmlFor="A day">A</label>
                    <input type="checkbox" name="B day" value="B" onChange={handleLetterDaysChange}/>
                    <label htmlFor="B day">B</label>
                    <input type="checkbox" name="C day" value="C" onChange={handleLetterDaysChange}/>
                    <label htmlFor="C day">C</label>
                    <input type="checkbox" name="D day" value="D" onChange={handleLetterDaysChange}/>
                    <label htmlFor="D day">D</label>
                    <input type="checkbox" name="E day" value="E" onChange={handleLetterDaysChange}/>
                    <label htmlFor="E day">E</label>
                    <input type="checkbox" name="F day" value="F" onChange={handleLetterDaysChange}/>
                    <label htmlFor="F day">F</label>
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Classes;