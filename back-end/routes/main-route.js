const express = require('express');
const mainRouter = express.Router();
const {getAllArticles , createNewArticles , changeArticleTitleById , 
    changeArticleAuthorById ,deleteArticleById , deleteArticleByAuthor , userSignUp, userLogin}= require('../controllers/main-controller')
// const middleware = require('../middlewares/middlewares')
mainRouter.get('/articles' , getAllArticles)
mainRouter.post('/articles' , createNewArticles)
mainRouter.put('/articles/:id/:newTitle' , changeArticleTitleById)
mainRouter.put('/articles/:id' , changeArticleAuthorById)
mainRouter.delete('/articles/:id', deleteArticleById)
mainRouter.delete('/articles', deleteArticleByAuthor)

mainRouter.post('/signup' , async(req , res)=>{
    try{
        res.json(await userSignUp(req.body))
    } catch(err){
        throw err
    }
})

mainRouter.post('/login', async(req , res)=>{
    try{
        res.json(await userLogin(req.body))

    } catch (err){
        throw err
    }
})

// mainRouter.get('/save' , middleware , (req , res)=>{
//     res.json('invest in yourself ')
// })

module.exports = mainRouter;