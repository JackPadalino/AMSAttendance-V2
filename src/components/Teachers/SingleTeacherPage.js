import React, { useState } from 'react';
import { NotFoundPage } from "..";
import { UpdateTeacherForm } from ".";

const SingleTeacherPage = () => {
    const [token, setToken] = useState(window.localStorage.getItem("token"));

    if(!token) return <NotFoundPage/>
    return (
        <div>
            <div>
                <UpdateTeacherForm/>
            </div>
            <p style={{color:'red'}}>delete</p>
        </div>
    );
};

export default SingleTeacherPage;