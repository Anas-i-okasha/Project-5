import React from 'react'
import { BrowserRouter as Router, Route , Link } from 'react-router-dom';

const Login=()=> {

        return (
            <div>
                <div>   
                    <div> <label>Email </label> <input type='text' placeholder='enter your email'/> </div>
                    <div> <label> Password </label> <input type='password' placeholder='enter your password'/> </div>
                    <div> <Link to='/signup'>   <button> Login </button></Link> </div>
                </div>
            </div>
        )
}

export default Login;
