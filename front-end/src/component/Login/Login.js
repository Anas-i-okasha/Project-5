import React from 'react'
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'
import Navbar from './Navbar/Navbar'
import { BrowserRouter as Router, Route , Link } from 'react-router-dom';
   
const Login=()=>{


        return (
            <div>
                <Navbar/>
        <div className='container'>
            <div className='input-group mb-3'>
                <div className='input-group-prepend'>
                <span class="input-group-text" id="basic-addon1">@</span>
                </div>
                <input type="text" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1"></input>
            </div>
            <div>
            <div className='input-group mb-3'>
                <div className='input-group-prepend'>
                <span class="input-group-text" id="basic-addon1">#</span>
                </div>
                <input type="text" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"></input>
            </div>
        </div>
        <div>
        <button type="button" class="btn btn-secondary btn-lg" id='login'>Login</button>
        </div>
        <span className='text'>You don't have account yet! </span><Link to='/signup' type='link' className='btn btn-primary btn-lg'>Sign Up</Link>
     </div>
     </div>
        )
  }

export default Login;


