import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { NotFoundPage } from "..";

const AvailableCoverages = () => {
    const { classId,school,period,letter } = useParams();
    const [token, setToken] = useState(window.localStorage.getItem("token"));
    const { allUsers } = useSelector((state) => state.user);
    const { allAbsentUsers } = useSelector((state) => state.absence);
    const [availableTeachers,setAvailableTeachers] = useState([]);
    const [coveredClassUserIds,setCoveredClassUserIds] = useState([]);

    const fetchData = async() => {
        // fetching the class that needs coverage
        // finding what teachers already have that class assigned to them (finding teachers and coteachers)
        const coveredClass = await axios.get(`/api/classes/${classId}`);
        const coveredClassUsers = coveredClass.data.users;
        const coveredClassUsersIds = coveredClassUsers.map((user)=>user.id);
        setCoveredClassUserIds(coveredClassUsersIds);
        // fetching an array of all classes happening at this time
        // making an array of all busy teachers that are teaching during this period
        // making an array of all teachers that all teachers that are either busy OR are not co-teachers of that class
        // combining unavailable teachers with absent teachers
        const classes = await axios.get(`/api/classes/${school}/${period}/${letter}`);
        const busyUsers = classes.data.flatMap(eachClass => eachClass.users);
        const unAvailableUsers = busyUsers.filter((user)=>!coveredClassUsersIds.includes(user.id));
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
            <h1>Available coverages</h1>
            <ul>
            {availableTeachers.map((teacher) => {
                return (
                    (coveredClassUserIds.includes(teacher.id) ? 
                    <li key={teacher.id}>{teacher.firstName} {teacher.lastName}* Co-Teacher</li> : 
                    <li key={teacher.id}>{teacher.firstName} {teacher.lastName}</li>)
                )
            })}
            </ul>
        </div>
    );
};

export default AvailableCoverages;