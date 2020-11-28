import React from 'react'
import { BrowserRouter as Router, Route , Link} from 'react-router-dom';
 const Signup=()=>{
    
        return (
            <div>
                <div>
                    <div> <label>Email</label> <input type='text' placeholder='enter your email' /></div>
                    <div> <label>Password</label> <input type='password' placeholder='enter your password'/> </div>
                    <div> <label>confirm your password</label> <input type='password' placeholder='confirm your password'/> </div>
                    <div> <Link to='/admin'>  <button> Sign Up </button>  </Link>  </div>
                </div>

            </div>
        )
}

export default Signup
