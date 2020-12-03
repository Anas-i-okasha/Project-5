const jwt = require('jsonwebtoken')
const mysql = 

module.exports= async (req , res , next)=>{
  if(!req.headers.authorization){
      res.json('please login to allowed you to enter save')
  }
    console.log('HED' , req.headers.authorization)
    const token = req.headers.authorization.split(" ").pop()
  jwt.verify(token , process.env.SECRET , (err , payload)=>{
      if(err){
        console.log(err)
      }
      const {id}=payload

      next()
  })
}