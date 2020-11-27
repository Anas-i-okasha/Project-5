  import React from 'react'
  import { BrowserRouter as Router, Route  , Link} from 'react-router-dom';
  
    const Navbar=()=> {
      
          return (
              <div>
                  <div>
                      <div> <h1> Project-5</h1> </div>
                      <div> <ul>
                          <Link to='/home'>Home</Link>  
                          <Link to='/about'>About Us </Link>  
                          <Link to='/contact'>Contact Us</Link>
                          <Link to='/'>Login</Link>
                          </ul> </div>
                  </div>
              </div>
          )
      
  }
  
  export default Navbar;
  