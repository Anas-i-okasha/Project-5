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
const changeArticleTitleById=()=>{

}



module.exports={
    getAllArticles,
    createNewArticles,
    changeArticleTitleById
}