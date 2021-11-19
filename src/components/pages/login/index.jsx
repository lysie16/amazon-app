import React from 'react'
import './styles.css';
import { Link, useHistory } from 'react-router-dom';

function Login() {

    const login = event => {
        event.preventDefault();  //stops the refresh
        //login logics
    };

    const register = event => {
        event.preventDefault();

    };

    return (
        <div className="login">
            <Link to="/">
                <img 
                className="login_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                alt=""
                />
             </Link>

            <div className="login_container">
                <h1>Sign in</h1>
                <form>
                <h5>E-mail</h5>
                <input type="text" />
                <h5>Password</h5>
                <input type="text" />
                <button onClick={login} type="submit" className="login_signInButton">Sign in</button>
                </form>

                <p>
                    By signing-in you agree to Amazon's Conditions of Use & Sale. 
                    Please see our Privacy Notice, our Cookies Notice and our Interest-
                    Based Ads Notice.
                </p>
                <button onClick={register} className="login_registerButton">Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login;
