import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { Link,useParams } from 'react-router-dom';
import { NotFoundPage } from "..";
import { setAllClasses } from "../../store/classSlice";
import { set,setDay,setAllAbsences } from "../../store/absenceSlice";
import { useSelector, useDispatch } from "react-redux";
import { SchoolDropdown,GradeDropdown,PeriodDropdown,LetterDaysSingleClass } from '.'

const formStyle = {
    display:'flex',
    flexDirection:'column',
    gap:'10px'
};

const SingleClass = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [token, setToken] = useState(window.localStorage.getItem("token"));
    const { allClasses } = useSelector((state) => state.class);
    const [name,setName] = useState('');
    const [school,setSchool] = useState('');
    const [grade,setGrade] = useState('');
    const [period,setPeriod] = useState('');
    const [letterDays,setLetterDays] = useState([]);
    const [classUpdatedMessage,setClassUpdatedMessage] = useState(false);

    const fetchClass = async() =>{
        const foundClass = await axios.get(`/api/classes/${id}`);
        setName(foundClass.data.name);
        setSchool(foundClass.data.school);
        setGrade(foundClass.data.grade);
        setPeriod(foundClass.data.period);
        setLetterDays(foundClass.data.letterDays);
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

    const updateClass = async(event) =>{
        event.preventDefault();
        try{
            const body = {
                name,
                school,
                grade,
                period,
                letterDays
            };
            await axios.put(`/api/classes/${id}`,body);
            const updateClasses = await axios.get('/api/classes');
            dispatch(setAllClasses(updateClasses.data));
            setClassUpdatedMessage(true);
        }catch(error){
            console.log(error);
            setClassUpdatedMessage(false);
        };
    };

    useEffect(() => {
        fetchClass();
      }, []);

    if(!token) return <NotFoundPage/>
    return (
        <div>
            <h1>{name}</h1>
            <form style={formStyle} onSubmit={updateClass}>
                <div>
                    <input value={name} onChange={handleNameChange}/>
                    <SchoolSelect school={school} handleSchoolChange={handleSchoolChange}/>
                    <GradeSelect grade={grade} handleGradeChange={handleGradeChange}/>
                    <PeriodSelect period={period} handlePeriodChange={handlePeriodChange}/>
                </div>
                <div>
                    <LetterDaysSingleClass letterDays={letterDays} handleLetterDaysChange={handleLetterDaysChange}/>
                </div>
                <button style={{width:'60px'}}>Submit</button>
                {classUpdatedMessage && <p style={{ color: "green", marginTop: "10px" }}>Class '{name}' successfully updated.</p>}
            </form>
        </div>
    );
};

export default SingleClass;