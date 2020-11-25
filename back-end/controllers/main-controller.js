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
console.log('PARAMS', req.method)

for(let i=0; i<articles.length;i++){
if(articles[i].id == req.params.id){
articles[i].title=req.params.newTitle
}
}
res.json(articles)
}

const changeArticleAuthorById=(req , res)=>{
for (let i=0 ; i<articles.length ; i++){
if(articles[i].id==req.params.id)
articles[i].author=req.body.newAuthor
}
res.json(articles)
}
const deleteArticleById=(req , res)=>{
for(let i=0; i<articles.length ; i++){
if(articles[i].id == req.params.id)
articles.shift(articles[i])
}
res.json(articles)
}

const deleteArticleByAuthor=(req , res)=>{
for(let i=0; i<articles.length ; i++){
    if(articles[i].author==req.body.author){
        articles.shift(articles[i])
    }

}
res.json(articles)
}

module.exports={
    getAllArticles,
    createNewArticles,
    changeArticleTitleById,
    changeArticleAuthorById,
    deleteArticleById,
    deleteArticleByAuthor
}