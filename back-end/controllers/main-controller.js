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
            console.log(result)
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
            res.json('sucess update new articles')
        }
    })
}

const changeArticleAuthorById=(req , res)=>{


}
const deleteArticleById=(req , res)=>{
}

const deleteArticleByAuthor=(req , res)=>{


}



module.exports={
    getAllArticles,
    createNewArticles,
    changeArticleTitleById,
    changeArticleAuthorById,
    deleteArticleById,
    deleteArticleByAuthor
}