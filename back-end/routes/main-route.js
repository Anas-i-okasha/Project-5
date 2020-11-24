const express = require('express');
const mainRouter = express.Router();
const {getAllArticles , createNewArticles , changeArticleTitleById}= require('../controllers/main-controller')

mainRouter.get('/articles' , getAllArticles)
mainRouter.post('/articles' , createNewArticles)
mainRouter.put('/articles/:id' , changeArticleTitleById)

module.exports = mainRouter;