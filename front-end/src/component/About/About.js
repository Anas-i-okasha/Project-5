import React, { useState , useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios'
import './About.css'

const About =()=> {
  useEffect(()=>{
      getSportsNews()
  } , [])
    const [sport , setSport]=useState({})
    const [second , setSecond]=useState({})
    const [three , setthree]=useState({})
    const [four , setfour]=useState({})

    const getSportsNews=()=>{
        Axios.get('http://localhost:5000/sports').then((responce)=>{
            console.log(responce.data.articles)
         setSport(responce.data.articles[0]) ; setSecond(responce.data.articles[1]) ; setthree(responce.data.articles[2]) ;setfour(responce.data.articles[3])
        })
        .catch((err)=>{
            console.log(err)

        })
    }
    
        return (
            <div>
                <Navbar/>
                    


<div class="card" >
  <img class="card-img-top" src={sport.urlToImage} alt="Card image cap"/>
  <div class="card-body">
    <h4 class="card-title">{sport.title}</h4>
    -----------------------------------------
    <p class="card-text">{sport.description}</p>
    <h5 className='card-text'> Author: {sport.author}</h5>
    <a href={sport.url} class="btn btn-primary">Read More </a>
  </div>
</div>

<div class="card" >
  <img class="card-img-top" src={second.urlToImage} alt="Card image cap"/>
  <div class="card-body">
    <h4 class="card-title">{second.title}</h4>
    -----------------------------------------
    <p class="card-text">{second.description}</p>
    <h5 className='card-text'> Author: {second.author}</h5>
    <a href={second.url} class="btn btn-primary">Read More </a>
  </div>
</div>

<div class="card" >
  <img class="card-img-top" src={three.urlToImage} alt="Card image cap"/>
  <div class="card-body">
    <h4 class="card-title">{three.title}</h4>
    -----------------------------------------
    <p class="card-text">{three.description}</p>
    <h5 className='card-text'> Author: {three.author}</h5>
    <a href={three.url} class="btn btn-primary">Read More </a>
  </div>
</div>

<div class="card" >
  <img class="card-img-top" src={four.urlToImage} alt="Card image cap"/>
  <div class="card-body">
    <h4 class="card-title">{four.title}</h4>
    -----------------------------------------
    <p class="card-text">{four.description}</p>
    <h5 className='card-text'> Author: {four.author}</h5>
    <a href={four.url} class="btn btn-primary">Read More </a>
  </div>
</div>

  </div>
        )
    
}

export default About
