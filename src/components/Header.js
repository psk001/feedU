import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

export default function Header (props){

    const [isActive, setActive] =  useState(false);
    const [headerOpen, setHeaderOpen] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };

    const toggleHeader = () => {
        setHeaderOpen(prev => !prev)
    };


    return (
        <div className="navigator">
            <nav className="navbar navbar-inverse navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand" > 
                            <p translate="no">
                                Find U
                                <br/>
                                <span className="head-tag">Bridging the gap...</span>
                            </p>
                        </Link>
                    </div>

                    <ul className="nav navbar-nav dropdown-nav">
                        <li className={isActive ? 'active': null} onClick={toggleClass}> 
                            <Link to="/">Home</Link>
                        </li>

                        <li className={isActive ? 'active': null} onClick={toggleClass}> 
                            <Link to="/advertisement">Advertisements</Link>
                        </li>

                        <li className={isActive ? 'active': null} onClick={toggleClass}> 
                            <Link to="/explore" href="#">Explore</Link>
                        </li>

                        <li className={isActive ? 'active': null} onClick={toggleClass}> 
                            <Link to="/contact">Contact Us</Link>
                        </li>
                    </ul>

                    <ul className="nav navbar-nav navbar-right dropdown-nav">
                        <li><Link to="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                        <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                    </ul>

                </div>
            </nav>
            <button class="menu-toggle" id="toggle-menu">
                toggle menu
            </button> 
        </div>
    );
}