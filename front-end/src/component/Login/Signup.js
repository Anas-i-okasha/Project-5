import React from 'react'
import {useState} from 'react'
import Axios from 'axios'
import Navbar from './Navbar/Navbar'
import { BrowserRouter as Router, Route , Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './signup.css'
 const Signup=()=>{
   const [name , setName] = useState("")
   const [age , setAge] = useState(0)
   const [email , setEmail] = useState("")
   const [password , setPassword]=useState("")

   const addUser=()=>{
       Axios.post('http://localhost:5000/signup' , {name:name , age:age , email:email ,password:password})
       .then((responce)=>{
           console.log(responce)
        
       })
       .catch((err)=>{
           console.log(err)
       })
   }
   
      
    
        return (
            <div>
                <Navbar/>
                <h3 className='header'>Login</h3>
        <div className='container'>
        
            <div className='input-group mb-3'>
                <div className='input-group-prepend'>
                <span class="input-group-text" id="basic-addon1"></span>
                
                </div>
                <input type="text" class="form-control" placeholder="Enter your full name" aria-label="Name" aria-describedby="basic-addon1" onChange={(event)=>{
                   setName(event.target.value)
                }}></input>
            </div>
            <div>
            <div className='input-group mb-3'>
                <div className='input-group-prepend'>
                <span class="input-group-text" id="basic-addon1"></span>
                </div>
                <input type="number" class="form-control" placeholder="Enter your Age" aria-label="age" aria-describedby="basic-addon1" onChange={(event)=>{
                    setAge(event.target.value)
                }}></input>
            </div>
        </div>
        <div className='input-group mb-3'>
                <div className='input-group-prepend'>
                <span class="input-group-text" id="basic-addon1">@</span>
                </div>
                <input type="text" class="form-control" placeholder="Enter your Email" aria-label="Email" aria-describedby="basic-addon1" onChange={(event)=>{
                    setEmail(event.target.value)
                }}></input>
            </div>
            <div className='input-group mb-3'>
                <div className='input-group-prepend'>
                <span class="input-group-text" id="basic-addon1">#</span>
                </div>
                <input type="password" class="form-control" placeholder="Enter your password" aria-label="password" aria-describedby="basic-addon1" onChange={(event)=>{
                    setPassword(event.target.value)
                }}></input>
            </div>
        
        <button type='button' className='btn btn-primary btn-lg' onClick={()=>addUser()}>Sign up</button>
        <div >
           <Link to='/' className='type'>  <span>you already have account? </span> </Link> 
        </div>
    
     </div>
     </div>
        )
}

export default Signup
