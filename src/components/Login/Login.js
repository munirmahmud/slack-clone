import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { auth, provider } from '../../firebase';
import './Login.elements.css';

const Login = () => {
    const [error, setError] = useState("");

    const signIn = e => {
        auth.signInWithPopup(provider)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                setError(error.message);
            });
    };
    
    return (
        <div className="login">
            <div className="login__container">

                {error && <div className="alert danger">{error}</div>}

                <div className="login__logo">
                    <img src="https://a.slack-edge.com/bv1-8/slack_logo-ebd02d1.svg" alt="Slack"/>
                </div>
                
                <div className="login__content">
                    <h1>Sign in to Slack</h1>
                    <p>Continue with the Google account or email address you use to sign in.</p>
                </div>

                <div className="login__form">
                    <input type="text" placeholder="name@work-email.com" />
                    <Button onClick={signIn}>Sign In with Email</Button>
                </div>
            </div>
        </div>
    );
};

export default Login;
