import React from 'react'
import { Link } from 'react-router-dom';
import "./style.css"
import logo from '../../Images/logo.png'
// import { auth } from '../../Firebase';
import { useState } from 'react/cjs/react.development';


 const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



    const login = e => {
        e.preventDefault(); //this stops the refresh
        //do the login logic
        // auth.signInWithEmailAndPassword(email, password)
    };

    const register = (e) => {
        e.preventDefault();
    }
    return (
        <div className='login'>
            <Link to="/">
                <img className="login-logo" src={logo} alt='logo'/>
            </Link>
            <div className='login-container'>
            <h1>Sign In</h1>
            <form>
                <h5>E-mail</h5>
                <input value={email} type="text"/>
                <h5>Password</h5>
                <input type="text"/>
                <button onClick={login}>Sign In</button>
            </form>
            <p>By signing in you agree with the Terms & conditions.</p>
            <button onClick={register} className='login-register'>Create your Amazon Account</button>
        </div>
        </div>

        
    )
}

export default Login;
