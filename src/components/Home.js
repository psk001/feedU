import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import advImg from '../images/advertiser.png';
import userImg from '../images/user.png';

export default function Home (){
    return (
        
        <div className="container-fluid body-component">
            <div className="col-md-4 col-sm-6 ">
                <div className=" user-type-container">
                    <img className="user-image-display" src= {advImg} alt={"leading to advertisement page"} />
                    <figcaption className="box-caption"> Have a place here? Want to advertise? <br/> Lets go!</figcaption>
                    <Link to="#" className="btn btn-info " role="button">Advertise</Link> 
                </div>
            </div>

            <div className="col-md-4 col-sm-6 ">
                <div className="user-type-container">
                    <img className="user-image-display" src={userImg} alt={"leading to explore page"} />
                    <figcaption className="box-caption" > Lookin for something? Want to explore? <br/> Hop in! </figcaption>
                    <Link to="#" className="btn btn-info " role="button">Lets Explore</Link>
                </div>
            </div>
        </div>
    );
}