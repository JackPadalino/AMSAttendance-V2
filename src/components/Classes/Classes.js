import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NotFoundPage } from "..";
import { setDate,setDay,setAllAbsences } from "../../store/absenceSlice";
import { useSelector, useDispatch } from "react-redux";

const formStyle={
    display:'flex',
    flexDirection:'column'
};

const formTop = {
    display:'flex',
    gap:'10px',
    marginBottom:'10px'
};

const formBottom = {
    display:'flex',
    gap:'10px',
    marginBottom:'10px'
};

const Classes = () => {
    const dispatch = useDispatch();
    const [token, setToken] = useState(window.localStorage.getItem("token"));
    
    if(!token) return <NotFoundPage/>
    return (
        <div>
            <h1>Add a class</h1>
            <form>
                <div style={formTop}>
                    <input placeholder="Class name" />
                    <label htmlFor="school">MS/HS</label>
                    <select name='school'>
                        <option value="-">-</option>
                        <option value="MS">MS</option>
                        <option value="HS">HS</option>
                    </select>
                    <label htmlFor="grade">Grade</label>
                    <select name='grade'>
                        <option value="-">-</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                    <label htmlFor="period">Grade</label>
                    <select name='period'>
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
                <div style={formBottom}>
                    <input type="checkbox" name="A day" value="A"/>
                    <label for="A day">A day</label>
                    <input type="checkbox" name="B day" value="B"/>
                    <label for="B day">B day</label>
                    <input type="checkbox" name="C day" value="C"/>
                    <label for="C day">C day</label>
                    <input type="checkbox" name="D day" value="D"/>
                    <label for="D day">D day</label>
                    <input type="checkbox" name="E day" value="E"/>
                    <label for="E day">E day</label>
                    <input type="checkbox" name="F day" value="F"/>
                    <label for="F day">F day</label>
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Classes;