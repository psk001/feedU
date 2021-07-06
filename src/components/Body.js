import React from "react";
import './Body.css';
import advImg from '../images/advertiser.png';
import userImg from '../images/user.png';

export default function Body (){
    return (
        
        <div className="container-fluid body-component">
            <div className="col-md-4 col-md-offset-2">
                <div className=" user-set-up">
                    <img className="user-display rounded-circle" src= {advImg} alt={"leading to advertisement page"} />
                    <figcaption> Have a place here? Want to advertise? <br/> Lets go!</figcaption>
                    <a href="#" className="btn btn-info user-creator" role="button">Advertise</a> 
                </div>
            </div>

            <div className="col-md-4">
                <div className="user-set-up">
                    <img className="user-display rounded-circle" src={userImg} alt={"leading to explore page"} />
                    <figcaption> Lookin for something? Want to explore? <br/> Hop in! </figcaption>
                    <a href="#" className="btn btn-info user-creator" role="button">Lets Explore</a>
                </div>
            </div>
        </div>
    );
}