import React from 'react'
import {useState} from 'react'
import Axios from 'axios'
import Navbar from './Navbar/Navbar'
import { BrowserRouter as Router, Route , Link} from 'react-router-dom';
 const Signup=()=>{
   

    
        return (
            <div>
                <Navbar/>
        <div className='container'>
            <div className='input-group mb-3'>
                <div className='input-group-prepend'>
                <span class="input-group-text" id="basic-addon1"></span>
                
                </div>
                <input type="text" class="form-control" placeholder="Enter your full name" aria-label="Name" aria-describedby="basic-addon1"></input>
            </div>
            <div>
            <div className='input-group mb-3'>
                <div className='input-group-prepend'>
                <span class="input-group-text" id="basic-addon1"></span>
                </div>
                <input type="text" class="form-control" placeholder="Enter your Age" aria-label="age" aria-describedby="basic-addon1"></input>
            </div>
        </div>
        <div className='input-group mb-3'>
                <div className='input-group-prepend'>
                <span class="input-group-text" id="basic-addon1">@</span>
                </div>
                <input type="text" class="form-control" placeholder="Enter your Email" aria-label="Email" aria-describedby="basic-addon1"></input>
            </div>
            <div className='input-group mb-3'>
                <div className='input-group-prepend'>
                <span class="input-group-text" id="basic-addon1">#</span>
                </div>
                <input type="text" class="form-control" placeholder="Enter your password" aria-label="password" aria-describedby="basic-addon1"></input>
            </div>
        
        <Link to='/admin' type='button' className='btn btn-primary btn-lg'>Sign Up</Link>
        <div >
            <span>you already have account</span> <Link to='/' type='link'>login</Link>
        </div>
     </div>
     </div>
        )
}

export default Signup
