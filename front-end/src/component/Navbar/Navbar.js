  import React from 'react'
  import { BrowserRouter as Router, Route  , Link} from 'react-router-dom';
  import './Navbar.css'
  
    const Navbar=()=> {
      
          return (
              <div className='container-fluid'>
            <nav className="navbar ">
                  <h2 >Invest In YourSelf</h2>
                  <ul className="nav">
                    <li className="nav-item">
                      <Link to='/home' className='nav-link'>Home</Link>
                    </li>
                    <li class="nav-item" >
                      <Link to='/about' className="nav-link" >About Us</Link>
                    </li>
                    <li class='nav-item'>
                      <Link to='/contact' className='nav-link'> Contact Us </Link>
                    </li>
                    <div class="dropdown">
                    <a  href="#" class="dropdown-toggle nav-link"  
                      data-toggle="dropdown"> Categoureis </a>

                         <div class="dropdown-menu" >
                        <a  href='#' class="dropdown-item" >Action</a>
                        <a href='#' class="dropdown-item" >Another action</a>
                         <a href='#' class="dropdown-item">Something else here</a>
                       </div>
                       </div>
              
                
      <Link to='/' className='nav-link' ><span className=" glyphicon glyphicon-log-in"></span> Sign Out </Link>
      
                  </ul>
                </nav>
                </div>
          )
  }
  
  export default Navbar;
  
