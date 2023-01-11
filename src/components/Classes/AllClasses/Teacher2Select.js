import React from 'react';
import { useSelector } from "react-redux";

const Teacher2Select = ({handleTeacher2Change}) => {
    const { allUsers } = useSelector((state) => state.user);

    return (
        <>
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

export default Teacher2Select;