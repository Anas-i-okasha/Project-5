const mysql = require('../db')

const getAllArticles=(req , res)=>{
console.log('All articles with me')
mysql.query(`SELECT * FROM articles` , (err , result , field)=>{
    if(err){
   console.log(err)
    } else {
        res.json(result)
        console.log(result)
    }
} )
}
const createNewArticles=(req , res)=>{
    console.log('REQ.BODY',req.body)
    const newArticle = req.body
    const sql = `INSERT INTO articles (title ,description ,  author ) VALUES (? , ? , ?)`;
    mysql.query(sql , [newArticle.title , newArticle.description , newArticle.author] , (err , result , field)=>{
        if(err){
            console.log(err)
        }else{
            res.json('new Articles added succesfully')
            console.log('New articles add succesfully')
        }
    })
}
const changeArticleTitleById=(req , res)=>{
   const info =[req.params.newTitle , req.params.id]
    
    const sql = `UPDATE articles SET title =? WHERE id = ?`;
    mysql.query(sql, info, (err , result , field)=>{
        if(err){
            console.log(err)
        }else{
            res.json('sucess update new item')
        
        }
    })
}

const changeArticleAuthorById=(req , res)=>{
const emp = [req.body.newAuthor , req.params.id]
const sql = `UPDATE articles SET author=?  WHERE id =?`;
mysql.query(sql , emp , (err , result , field)=>{
    if(err){
        console.log('ERR',err)
    } else{
        res.json('sucessfuly change author article')
    }
})

}
const deleteArticleById=(req , res)=>{
    const dele = [req.params.id]
    const sql = `DELETE FROM articles WHERE id =?`;
    mysql.query(sql , dele , (err , result , field)=>{
        if(err){
            console.log('ERR', err)
        }else{
            res.json('first delete done sucesfully')
        }
    })
}

const deleteArticleByAuthor=(req , res)=>{
const author = [req.body.author]
const sql = `DELETE FROM articles WHERE author =?`;
mysql.query(sql , author , (err , result , field)=>{
    if(err){
        console.log('Err',err)
    }else{
        res.json('second delete done sucessfully')
    }
})

}
const userSignUp=(user)=>{
const {name , age , email , password}=user

console.log(  'I will send you all users:', name + " " + age + " " + email + " " + password)
mysql.query(`SELECT * FROM users WHERE email = ?` , [email] , (error , result , field)=>{
    if(error){
        console.log('ERR' , error)
    }
    if(result.length>0){
        return 'the email is already exist'
    }
    if(result.length === 0){
     const sql=`INSERT INTO users (name , age , email , password) VALUES (? , ? , ? , ?)`;
     mysql.query(sql , [user.name , user.age , user.email , user.password] , (err , result , field)=>{
         if(err){
             console.log(err)
         } else{
             return 'you create new account succsfully , thanks'
         }
     })
    }
})

}





module.exports={
    getAllArticles,
    createNewArticles,
    changeArticleTitleById,
    changeArticleAuthorById,
    deleteArticleById,
    deleteArticleByAuthor,
    userSignUp
}