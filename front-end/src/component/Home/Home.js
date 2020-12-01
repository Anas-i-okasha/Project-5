import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import Navbar from '../Navbar/Navbar'

const Home=()=> {
    const [articles , setarticles] = useState([])
    const getAllArticles=()=>{
        axios.get('http://localhost:5000/articles')
        .then((responce)=>{
          console.log('Responce', responce)
          setarticles(responce.data)
        })
        .catch((err)=>{
          console.log('Err' , err)
        })
       }
        return (
            <div>
              <Navbar/>
                <p> welcome in my Home </p>

                <div> <button onClick={getAllArticles}> Get All articles</button> </div>

                <div> 
                    <div> {articles.map((elem)=>{
                         return  <div className='get'> <span> Title: {elem.title}</span>
                         <span>Description: {elem.description}</span> 
                         <span> Author: {elem.author} </span> </div>
                    })} </div>
                </div>
            </div>
        )
    
}

export default Home
