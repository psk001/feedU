import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer(){
    return(
        <footer className="fixed-bottom">
           <Link to="#" >Career </Link> | 
           <Link to="#"> Terms & Conditions </Link>
        </footer>  
    );
}