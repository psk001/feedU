import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = '941371050165-kahd86eha2gmckvp9bab7cvl1aqvj6ce.apps.googleusercontent.com';

export default function Logout(){

    const onSuccess = (res) => {
        console.log('[log Out Success] res: ', res);
    };

    return (
        <div className="logout">
            <GoogleLogout
                clientId={clientId}
                buttonText='Log Out'
                onLogoutSuccess={onSuccess}
            ></GoogleLogout>    
        </div>
    )

}