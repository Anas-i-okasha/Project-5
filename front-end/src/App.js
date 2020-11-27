import React from 'react';
import { BrowserRouter as Router, Route , Link } from 'react-router-dom';
import Tasks from './component/Tasks'
import Login from './component/Login/Login'
import Signup from './component/Login/Signup';
import Navbar from './component/Navbar/Navbar'
import About from './component/About/About'
import Home from './component/Home/Home'
import Contact from './component/Contact/Contact'


const App = () => {
 
  return (
    <Router>
    <div>
      <Navbar/>
      <Route path ='/tasks' exact component={Tasks}/>
      <Route path='/' exact component={Login}/>
      <Route path='/signup' exact component={Signup} />
      <Route path='/about' exact component={About} />
      <Route path='/home' exact component={Home}/>
      <Route path='/contact' exact component={Contact}/>
      </div>
      </Router>
  );
};
export default App;

