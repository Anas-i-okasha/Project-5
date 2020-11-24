const articles = require('../dataB')
const dataB = require('../dataB')


const getAllArticles=(req , res)=>{
console.log('All articles with me')
res.json(articles)
}
const createNewArticles=(req , res)=>{
    console.log('Add new articles')
    console.log('REQ.BODY',req.body)
    const newArticle = req.body
    articles.push(newArticle)
    res.json(articles)
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