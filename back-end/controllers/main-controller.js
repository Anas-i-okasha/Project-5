const mysql = require('../db')
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')





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

// Sign up route to make the user create account --
const userSignUp=  (user)=>{
const {name , age , email , password}=user

// check if the user exist in the database --------
mysql.query(`SELECT * FROM users WHERE email = ?` , [email] , async (error , result , field)=>{
    if(error){
        console.log('ERR' , error)
    }
    if(result.length>0){
        console.log( 'the email is already exist')
        return " this email is already exist "
    }
    // create new user with hash password and save it in the database ---------
    if(result.length === 0){
        const newUser = user;
        newUser.password = await bcrypt.hash(user.password , parseInt(process.env.SALT) )

     const sql=`INSERT INTO users (name , age , email , password) VALUES (? , ? , ? , ?)`;
     mysql.query(sql , [user.name , user.age , user.email , user.password] , (err , result , field)=>{
         if(err){
             console.log(err)
         } else{
             console.log("thank you for create new account ")
             
         }  
     })
     return ( 'you have create new account succsfully')
    }
})
}

const userLogin =(user)=>{
const {email , password}=user
if(!email || !password){
    console.log('Enter your email and password')
    return 'Enter your email and password'
}
mysql.query(`SELECT * FROM users WHERE email = ?` , [email] , async (error , result , field)=>{
    if(error){
        console.log('Err', error)
    }
    if(result.length===0){
        console.log('the user is not found in database')
    }else{
        if(await bcrypt.compare(password , result[0].password)){
         console.log('login succesfully')
        }else{
            console.log('invalid username and password')
        }
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
    userSignUp,
    userLogin
}