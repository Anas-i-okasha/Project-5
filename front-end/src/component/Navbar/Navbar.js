  import React from 'react'
  import { BrowserRouter as Router, Route  , Link} from 'react-router-dom';
  
    const Navbar=()=> {
      
          return (
              <div>
                   <nav id="navbar-example2" class="navbar navbar-light bg-light">
  <a class="navbar-brand" >Invest in YourSelf</a>
  <ul class="nav nav-pills">
    <li class="nav-item">
      <Link to='/' class="nav-link" >Home</Link>
    </li>
    <li class="nav-item">
      <Link to='/about' class="nav-link" >About</Link>
    </li>
    <li className='nav-item'>
       <Link to='/contact' className='nav-link'>Contact Us </Link>
    </li>
    <li className='nav-item'>
        <Link to='/login' className='nav-link'> Login </Link>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-toggle="dropdown"  role="button" aria-haspopup="true" aria-expanded="false">Catigoury</a>
     
    </li>
  </ul>
</nav>
       </div>
          )
  }
  
  export default Navbar;
  

{/* <div>
                    <div> <h1> Project-5</h1> </div>
                      <div> <ul>
                           <Link to='/home' className="text-success">Home</Link>  
                           <Link to='/about'>About Us </Link>  
                           <Link to='/contact'>Contact Us</Link>
                         <Link to='/'>Login</Link>

                         
                         </ul> </div>
                  </div> */}