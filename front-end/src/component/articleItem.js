import React  from 'react'
import Axios from 'axios'

const  AddNewArticles=(props)=> {

    const {title , description , author , id}=props.oneArticle

   
    const deleteArticle=()=>{
        Axios.delete(`http://localhost:5000/articles/${id}`).then((responce)=>{
            if(responce.status===200){
                props.getAll()
            }
        })
        .catch((err)=>{
            console.log('ERR',err)
        })

    }


    return (
        <div>
            <div><p>Title:{title}</p>
    <p>Description:{description}</p>
    <p>Author:{author}</p>
    <button onClick={deleteArticle}>Delete </button>
    </div>
            
        </div>
    )
}

export default AddNewArticles
