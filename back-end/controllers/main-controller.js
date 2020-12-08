const mysql = require('../db')
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');



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
const userSignUp=  (req , res)=>{
const {name , age , email , password}=req.body
mysql.query(`SELECT * FROM users WHERE email = ?` , [email] , async (error , result , field)=>{
    if(error){
        console.log('ERR' , error)
    }
// To check if the user exist in our database or not
    if(result.length>0){
        res.json(" this email is already exist ") 
    } else {(result.length === 0)
        const newUser = req.body;
        newUser.password = await bcrypt.hash(password , parseInt(process.env.SALT) )
// if the user does't exist in our database will create new account to make him reach our dashboard 
    //  const sql=`INSERT INTO users (name , age , email , password) VALUES (? , ? , ? , ?)`;
     mysql.query( `INSERT INTO users SET ? `,{name:name , age:age , email:email , password:newUser.password} , (err , results , field)=>{
         if(err){
             console.log(err)
         } else{
             res.json('Thank you for create your account') 
         }  
     })
    }
})
}

const userLogin = async (req , res)=>{
    try{
        const {email , password}=req.body

        mysql.query(`SELECT * FROM users WHERE email = ?` , [email] , async (error , result , field)=>{
            if(error){
                console.log('Err', error)
            }
            if(result.length===0){
                res.status(404).json({massege:'the user is not found '})
            }else{
                if(await bcrypt.compare(password , result[0].password)){
                    
                const option={
                    expiresIn:process.env.TOKEN_EXPIRATION
                }
                //  return jwt.sign(payload , process.env.SECRET , option)
                 
                 const token=await jwt.sign( {id:result[0].id}, process.env.SECRET , option)
                 res.status(200).json({massege:'Login sucessfully' , token:token}) 
                  
                
                }else{
                    console.log('invalid username and password')
                    res.status(404).json({massege:'invalid username or password'})
                }
            }
        })

    } catch (err){
         console.log('ERR',err)
    }
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