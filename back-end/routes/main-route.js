const express = require('express');
const mainRouter = express.Router();
const {getAllArticles , createNewArticles , changeArticleTitleById , 
    changeArticleAuthorById ,deleteArticleById , deleteArticleByAuthor , userSignUp, userLogin , getWeather}= require('../controllers/main-controller')
const middleware = require('../middlewares/middlewares')
mainRouter.get('/articles' , getAllArticles)
mainRouter.post('/articles' , createNewArticles)
mainRouter.put('/articles/:id/:newTitle' , changeArticleTitleById)
mainRouter.put('/articles/:id' , changeArticleAuthorById)
mainRouter.delete('/articles/:id', deleteArticleById)
mainRouter.delete('/articles', deleteArticleByAuthor)


mainRouter.post('/signup',  userSignUp)

mainRouter.post('/login' , userLogin)


mainRouter.get('/save' , middleware , (req , res)=>{
    res.json('invest in yourself ')
})

mainRouter.get('/weather',getWeather)

module.exports = mainRouter;