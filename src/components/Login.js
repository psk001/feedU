import React from "react";
import { GoogleLogin } from "react-google-login";

const clientId = '941371050165-kahd86eha2gmckvp9bab7cvl1aqvj6ce.apps.googleusercontent.com';

export default function Login () {

    const onSuccess = (res) => {
        console.log('[Login Success] current user:',  res.profileObj);
    };

    const onFailure = (res) => {
        console.log('[Login Failed] res: ', res);
    };


        return (
            <form className="auth-inner">
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    <a href="#">Forgot password?</a>
                </p>

                <GoogleLogin
                    clientId = {clientId} 
                    buttonText = 'Login With Google'
                    onSuccess = {onSuccess}
                    onFailure = {onFailure}
                    cookiePolicy = {'single_host_origin'}
                    isSignedIn={true}
                />
            </form>
        );
    }
