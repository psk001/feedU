import React from 'react';
import { SocialIcon } from 'react-social-icons';

import './contact.css'

export default function Contact(){
    return (
        <div className="contact" > 
            <h1>Developer Connect </h1>
            <SocialIcon className="connect" url="https://github.com/psk001" fgColor="white" />
            <SocialIcon className="connect" url="https://twitter.com/pr_psk?s=09" bgColor="black" fgColor="white" />
            <SocialIcon className="connect" url="https://www.linkedin.com/feed/" bgColor="black" fgColor="white" label="linkedin" />
        </div>
    );
} 