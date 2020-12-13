import Axios from 'axios'
import React , {useState } from 'react'

const AddNewItem=(props)=> {
    const [title , setTitle]=useState('')
    const [description , setDescription]=useState('')
    const [author , setAuthor]=useState('')


    const addnew=(e)=>{
        Axios.post('http://localhost:5000/articles',{title:title , description:description , author:author})
        .then((responce)=>{  
            if(responce.status===200){
                props.getAll()
            }  
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    const handel=(e)=>{
        setAuthor(e.target.value)

    }
    return (
        <div>
            <div>
                <div><label>Title</label><input type='text' placeholder='Enter your title' onChange={(e)=>{
                    setTitle(e.target.value)
                } } /></div>
                <div><label>Description</label> <input type='text' placeholder='Enter your description' onChange={(e)=>{
                    setDescription(e.target.value)
                } }  /></div>
                <div><label>Author</label><input type='text' placeholder='Enter author name' onChange={handel} />
                <button onClick={addnew}>Add new Article</button>
                </div>
            </div>
            
        </div>
    )
}

export default AddNewItem
