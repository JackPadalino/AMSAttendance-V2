import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { NotFoundPage } from ".";

const AvailableCoverages = () => {
    const { school,period,letter } = useParams();
    const [token, setToken] = useState(window.localStorage.getItem("token"));
    const { allUsers } = useSelector((state) => state.user);
    const { allAbsentUsers } = useSelector((state) => state.absence);
    const [availableTeachers,setAvailableTeachers] = useState([]);

    const fetchData = async() => {
        // fetching an array of all classes happening at this time
        // making an array of all unavailable teachers from the classes going on at this time
        // combining unavailable teachers with absent teachers
        const classes = await axios.get(`/api/classes/${school}/${period}/${letter}`);
        const unAvailableUsers = classes.data.flatMap(eachClass => eachClass.users);
        const allUnAvailableUsers = [...allAbsentUsers,...unAvailableUsers];
        // making an array of all unique unavailable teacher ids
        // comparing the two user id arrays and making a final array of available user ids
        // we needed to make an array of ids so that we could filter out teachers who are not
        // available --> was not working when trying to directly filter entire teacher objects
        // this is because all objects are unique in memory even if key/value pairs are same
        // fetching all available teachers from their ids
        const allUserIds = allUsers.map((user)=>user.id);
        const allUnAvailableUserIds = allUnAvailableUsers.map((user)=>user.id);
        const availableUserIds = allUserIds.filter(id => !allUnAvailableUserIds.includes(id)); 
        const userPromises = availableUserIds.map(id => axios.get(`/api/users/${id}`));
        const userResponses = await Promise.all(userPromises);
        setAvailableTeachers(userResponses.map(response => response.data));
      };

    useEffect(() => {
        fetchData();
    }, []);

    if(!token) return <NotFoundPage/>
    return (
        <div>
            <h3>Available teachers</h3>
            <ul>
            {availableTeachers.map((teacher) => {
                return (
                    <li key={teacher.id}>{teacher.firstName} {teacher.lastName}</li>
                )
            })}
            </ul>
        </div>
    );
};

export default AvailableCoverages;