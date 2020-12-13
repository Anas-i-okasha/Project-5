import React from 'react'
import {useState , useEffect} from 'react'
import axios from 'axios'
import Navbar from '../Navbar/Navbar'
import ArticleItem from '../articleItem'
import AddNewItem from '../AddNewItem'
import './Home.css'



const Home=()=> {
    const [articles , setarticles] = useState([])
    const [search , setSearch]=useState("")
     useEffect(()=>{
       getAllArticles()
     } ,[])
     
     
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
    
       const filterSer = articles.filter((item)=>{
         return item.title.toLowerCase().includes(search.toLowerCase()) || item.description.toLowerCase().includes(search.toLocaleLowerCase()) || item.author.toLowerCase().includes(search.toLocaleLowerCase())

       })
        return (
            <div>
              <Navbar/>
              <div className='home'>  <input type='text' placeholder='search...' className='search' onChange={(e)=>{
                    setSearch(e.target.value)
                  }}/> 
        <div>{filterSer.map((article , i)=><ArticleItem oneArticle={article} getAll={getAllArticles}  key={i}/>)}</div>
                
                <div><AddNewItem getAll={getAllArticles}/></div>
              
                <div>
                </div>
                
                </div>
            </div>
        )
    
}

export default Home
