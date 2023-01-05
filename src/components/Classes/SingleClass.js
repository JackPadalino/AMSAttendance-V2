import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { NotFoundPage } from "..";

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

    useEffect(() => {
        fetchClass();
      }, []);

    if(!token) return <NotFoundPage/>
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default SingleClass;