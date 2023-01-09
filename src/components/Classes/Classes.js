import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NotFoundPage } from "..";
import { setAllClasses } from "../../store/classSlice";
import { set,setDay,setAllAbsences } from "../../store/absenceSlice";
import { useSelector, useDispatch } from "react-redux";
import { SchoolDropdown,GradeDropdown,PeriodDropdown,LetterDays,TeacherDropdowns } from './'

const formStyle = {
    display:'flex',
    flexDirection:'column',
    gap:'10px'
};

const Classes = () => {
    const dispatch = useDispatch();
    const [token, setToken] = useState(window.localStorage.getItem("token"));
    const { allClasses } = useSelector((state) => state.class);
    const [name,setName] = useState('');
    const [school,setSchool] = useState('');
    const [grade,setGrade] = useState('');
    const [period,setPeriod] = useState('');
    const [letterDays,setLetterDays] = useState([]);
    const [teacher1Name,setTeacher1Name] = useState(null);
    const [teacher2Name,setTeacher2Name] = useState(null);
    const [teacherNames,setTeacherNames] = useState([]);
    const [duplicateTeacherNameMessage,setDuplicateTeacherNameMessage] = useState(false);
    const [successMessage,setSuccessMessage] = useState(false);
    
    const addClass = async(event) =>{
        event.preventDefault();
        if(!duplicateTeacherNameMessage){
            const body = {
                name,
                school,
                grade,
                period,
                letterDays,
                teacherNames
            };
            await axios.post(`/api/classes`,body);
            const allClasses = await axios.get('/api/classes');
            dispatch(setAllClasses(allClasses.data));
            setSuccessMessage(true);
        };
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

    // adding a letter day to the letterDays array if not present or removing if present
    const handleLetterDaysChange =(event)=>{
        if(letterDays.includes(event.target.value)){
            setLetterDays(letterDays.filter(day=>day!==event.target.value))
        }else{
            setLetterDays([...letterDays,event.target.value]);
        };
    };

    const handleTeacher1Change = (event) =>{
        event.target.value===teacher2Name ? setDuplicateTeacherNameMessage(true) : setDuplicateTeacherNameMessage(false);
        setTeacher1Name(event.target.value);
        setTeacherNames([event.target.value,teacher2Name]);
    };

    const handleTeacher2Change = (event) =>{
        event.target.value===teacher1Name ? setDuplicateTeacherNameMessage(true) : setDuplicateTeacherNameMessage(false);
        setTeacher2Name(event.target.value);
        setTeacherNames([teacher1Name,event.target.value]);
    };

    if(!token) return <NotFoundPage/>
    return (
        <div>
            <h1>Add a class</h1>
            <form onSubmit={addClass} style={formStyle}>
                <div>
                    <input placeholder="Class name" onChange={handleNameChange}/>
                    <SchoolDropdown handleSchoolChange={handleSchoolChange}/>
                    <GradeDropdown handleGradeChange={handleGradeChange}/>
                    <PeriodDropdown handlePeriodChange={handlePeriodChange}/>
                </div>
                <div>
                    <LetterDays handleLetterDaysChange={handleLetterDaysChange}/>
                </div>
                <div>
                    <TeacherDropdowns handleTeacher1Change={handleTeacher1Change} handleTeacher2Change={handleTeacher2Change}/>
                </div>
                {!duplicateTeacherNameMessage && <button style={{width:'60px'}}>Submit</button>}{}
                {duplicateTeacherNameMessage && <p style={{ color: "red", marginTop: "10px" }}>Warning: Duplicate teacher selected!</p>}
                {successMessage && <p style={{ color: "green", marginTop: "10px" }}>Class '{name}' successfully created.</p>}
            </form>
            <div>
                {allClasses.map((eachClass) => {
                    return (
                        <div key={eachClass.id}>
                            <Link to={`/classes/${eachClass.id}`}>{eachClass.name}</Link>
                        </div>  
                    );
                })}
            </div>
        </div>
    );
};

export default Classes;