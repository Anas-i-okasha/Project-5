import React from 'react'
import {useState} from 'react'
import Axios from 'axios'
import { BrowserRouter as Router, Route , Link} from 'react-router-dom';
 const Signup=()=>{
   

    
        return (
            <div>
                <div>
                    <div> <label>Email</label> <input type='text' placeholder='enter your email' /></div>
                    <div> <label>Password</label> <input type='password' placeholder='enter your password' /> </div>
                    <div>   <button> Sign Up </button>   </div>
                </div>

            </div>
        )
}

export default Signup
