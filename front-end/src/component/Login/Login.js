import React from 'react'
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'
import Navbar from './Navbar/Navbar'
import { BrowserRouter as Router, Route , Link } from 'react-router-dom';
   
const Login=()=>{
    const [email , setemail]=useState("")
    const [Password , setpassword]=useState("")

    const login=()=>{
        console.log('login succssfully')
    }
        return (
            <div>
                <Navbar/>
                
        <div className='container'>
        <h3 className='header'>Login</h3>
            <div className='input-group mb-3'>
                <div className='input-group-prepend'>
                <span class="input-group-text" id="basic-addon1">@</span>
                </div>
                <input type="text" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" onChange={(event)=>{
                    setemail(event.target.value)
                }}></input>
            </div>
            <div>
            <div className='input-group mb-3'>
                <div className='input-group-prepend'>
                <span class="input-group-text" id="basic-addon1">#</span>
                </div>
                <input type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" onClick={(event)=>{
                    setpassword(event.target.value)
                }}></input>
            </div>
        </div>
        <div>
        <button type="button" class="btn btn-secondary btn-lg" id='login' onClick={login}>Login</button>
        </div>
        <Link to='/signup' className='type'> you don't have account yet ? </Link>
     </div>
     </div>
        )
  }

export default Login;


