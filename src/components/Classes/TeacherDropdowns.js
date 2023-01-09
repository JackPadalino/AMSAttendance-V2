import React from 'react';
import { useSelector } from "react-redux";

const TeacherDropdowns = ({handleTeacher1Change,handleTeacher2Change}) => {
    const { allUsers } = useSelector((state) => state.user);

    return (
        <>
            <label htmlFor="teacher 1">Teacher</label>
            <select name='teacher 1' onChange={handleTeacher1Change}>
                <option value="-">-</option>
                {allUsers.map((user) => {
                    return (
                        <option key={user.id} value={user.fullName}>{user.fullName}</option>
                    );
                })}
            </select>
            <label htmlFor="teacher 2">Teacher</label>
            <select name='teacher 2' onChange={handleTeacher2Change}>
                <option value="-">-</option>
                {allUsers.map((user) => {
                    return (
                        <option key={user.id} value={user.fullName}>{user.fullName}</option>
                    );
                })}
            </select>
        </>
    );
};

export default TeacherDropdowns;