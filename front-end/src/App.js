import React from 'react';
import axios from 'axios'
import {useState} from 'react'
import './App.css';


const App = () => {
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
      <h1>PROJECT - 4</h1>

      <div className='btn'> <button onClick={getAllArticles}>Get all articles</button> 

      {articles.map((elem)=>{
       return  <div className='get'> <span> Title: {elem.title}</span> <span>Description: {elem.description}</span> <span> Author: {elem.author} </span> </div>
      })}

      </div>
    </div>
  );
};
export default App;

