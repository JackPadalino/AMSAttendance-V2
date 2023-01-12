import React,{ useState } from 'react';
import { NotFoundPage } from "../..";
import { UpdateClassForm } from '.'

const SingleClassPage = () => {
    const [token, setToken] = useState(window.localStorage.getItem("token"));

    if(!token) return <NotFoundPage/>
    return (
        <div>
            <UpdateClassForm/>
            <p style={{color:'red'}}>delete</p>
        </div>
    );
};

export default SingleClassPage;