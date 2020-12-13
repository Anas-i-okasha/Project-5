import React from 'react'
import {useState} from 'react'
import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import swal from 'sweetalert';
import './Login.css'
import Navbar from './Navbar/Navbar'
import { BrowserRouter as Router, Route , Link, Redirect , useHistory } from 'react-router-dom';

   
const Login=()=>{
    const history = useHistory()
    const [email , setEmail]=useState("")
    const [password , setPassword]=useState("")

    const login=()=>{
        if(email.length<3 || password.length<3){
        swal({
            icon:'error',
            title:'oops',
            text:'Enter your Email and password',
        })
        
        }
        Axios.post('http://localhost:5000/login', {email:email , password}).then((data)=>{
          if(data.data){
              swal({
                position: 'top-end',
                icon: 'success',
                title: 'Login Successfully',
                timer: 1500
              })
              history.push('/home')
          }
           if(email =='anasokasha9951' && password==12345){
            swal({
                icon:'success',
                title: 'Welcome admin ',
                text: 'Enjoy in your time ',
                timer:2000
              })
             
             history.push('/admin')
          }else{
              console.log('Enter valid information')
          }
        })
        .catch((err)=>{
            console.log(err)

        })
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
                    setEmail(event.target.value)
                }}></input>
            </div>
            <div>
            <div className='input-group mb-3'>
                <div className='input-group-prepend'>
                <span class="input-group-text" id="basic-addon1">#</span>
                </div>
                <input type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" onChange={(event)=>{
                    setPassword(event.target.value)
                }}></input>
            </div>
        </div>
        <div>
        <button type="button" class="btn btn-secondary btn-lg" id='login' onClick={()=>login() }>Login</button>
    
        </div>
        <Link to='/signup' className='type'> you don't have account yet ? </Link>
     </div>
     </div>
        )
  }

export default Login;


