import React from 'react'
import {useState , useEffect} from 'react'
import Axios from 'axios'
import Navbar from '../Navbar/Navbar'
import ArticleItem from '../articleItem'
import AddNewItem from '../AddNewItem'
import './Home.css'



const Home=()=> {
    const [articles , setarticles] = useState([])
    const [search , setSearch]=useState("")
    const [Data , setData]=useState({})
    const [wind , setWind]=useState({})
    const [city , setcity]=useState({})
    const [des , setDes] = useState({})
  
    const getWeatherData =  () => {
        Axios.get('http://localhost:5000/weather').then((responce)=>{

            setData(responce.data.main) ;setWind(responce.data.wind) ;setcity(responce.data) ;setDes(responce.data.weather[1])
            
        })
        .catch((err)=>{
            console.log(err)
        })
       
    };
     useEffect(()=>{
       getAllArticles()
       getWeatherData()
     } ,[])
     
     
    const getAllArticles=()=>{
        Axios.get('http://localhost:5000/articles')
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
              <h1>  {Data.feels_like} min temp feel {"||"} Temp :{Data.temp}C {"||"} Wind speed:{wind.speed} Km/h  {"||"} {city.name} {"||"} </h1>
              <div className='home'>  <input type='text' placeholder='search...' className='search' onChange={(e)=>{
                    setSearch(e.target.value)
                  }}/> 
                  <div><AddNewItem getAll={getAllArticles}/></div>
                  
        <div>{filterSer.map((article , i)=><ArticleItem oneArticle={article} getAll={getAllArticles}  key={i}/>)}</div>
                
                
              
                <div>
                </div>
                
                </div>
            </div>
        )
    
}

export default Home
