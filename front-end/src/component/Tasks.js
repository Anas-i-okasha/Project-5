import React from 'react';
import axios from 'axios'
import {useState} from 'react'
import { BrowserRouter as Router, Route , Link , useParams } from 'react-router-dom';
import Navbar from './Navbar/Navbar'


const Tasks = () => {
  
  // const params = useParams
  const [articles , setarticles] = useState([])
  const [title , settitle] = useState("")
  const [description , setdescription]=useState("")
  const [author , setauthor] = useState("")
  const [newAuthor , setNewAuthor]=useState("")
  // const[id , setid]=useState("")

  
  

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
   
   const addNewArticles=()=>{
     axios.post('http://localhost:5000/articles' , {title:title , description:description , author:author})
     .then((responce)=>{
        console.log('ERR' , responce)
     })
     .catch((error)=>{
      console.log('ERR' , error)
     })
   }

  //  const changeArticleAthourById=()=>{
  //    axios.put('/articles/:id', {newAuthor:newAuthor , id:id}).then((responce)=>{

  //    })
  //    .catch((error)=>{
  //      console.log(error)
  //    })
  //  }

  return (
    <div>
      <Navbar/>
      <h1>PROJECT - 4</h1>
      <div className='btn'> <button onClick={getAllArticles}>Get all articles</button> 

      {articles.map((elem)=>{
       return  <div className='get'> <span> Title: {elem.title}</span>
        <span>Description: {elem.description}</span> 
        <span> Author: {elem.author} </span> </div>
      })}

      </div>
      <div> <h1>Add new Articles</h1>
      <div> <input type='text' placeholder='enter your title' onChange={(event)=>{
        settitle(event.target.value) }} /></div>
      <div> <input type='text' placeholder='enter your description'onChange={(event)=>
      setdescription(event.target.value)} /> </div>
      <div> <input type='text' placeholder='enter your author ' onChange={(event)=>{
        setauthor(event.target.value)
      }}/> </div>
      <div>  <button onClick={addNewArticles}>Add new Articles</button> </div>
      </div>
      <div>
        <input type='text' placeholder='enter new author' onChange={(event)=>{
          setNewAuthor(event.target.value)
        }}/>
        <input type='text' onChange={(event)=>{
          // setid(event.target.value)
        }}/>
        {/* <button onClick={changeArticleAthourById}>change author</button> */}
      </div>
      </div>

      
  );
};
export default Tasks;

