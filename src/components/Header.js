import React from 'react';
import './Header.css';

export default function Header (){
    return (
        <div className="navigator">
            <nav className="navbar navbar-inverse navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#"> 
                            <p translate="no">
                                Find U
                                <br/>
                                <span className="head-tag">Bridging the gap...</span>
                            </p>
                        </a>
                    </div>

                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Home</a></li>
                        <li><a href="#">Advertisements</a></li>
                        <li><a href="#">Explore</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>

                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                        <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                    </ul>

                </div>
            </nav>
        </div>
    );
}