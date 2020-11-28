import React from 'react';
import axios from 'axios'
import {useState} from 'react'




const Tasks = () => {
  const [articles , setarticles] = useState([])
  const [title , settitle] = useState("")
  const [description , setdescription]=useState("")
  const [author , setauthor] = useState("")
  

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

//    const changeArticleTitleById=()=>{
//      axios.put('/articles/:id/:newTitle', {title:newTitle , id:id}).then((responce)=>{

//      })
//      .catch((error)=>{
//        console.log(error)
//      })
//    }

  return (
    <div>
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
      </div>

      
  );
};
export default Tasks;

