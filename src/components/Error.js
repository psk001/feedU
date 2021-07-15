import React from 'react';
import {Link} from 'react-router-dom';
import {BsHouseFill} from 'react-icons/bs'
import './Error.css';

export default function Error(){
    return (
        <div className="error-page">
            <h2>404 </h2>
            <h3>Page not found</h3>
            <Link to="/"> <BsHouseFill /> Lets go home !! </Link>
        </div>
    )
}