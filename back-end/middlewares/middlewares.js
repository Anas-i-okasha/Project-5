const jwt = require('jsonwebtoken')

module.exports= async (req , res , next)=>{
  if(!req.headers.authorization){
      res.json('please login to allowed you to enter save')
  }
    console.log('HED' , req.headers.authorization)
    const token = req.headers.authorization.split(' ')[1]
  jwt.verify(token , process.env.SECRET , (err , result)=>{
      if(err) console.log('ERR:' , err)
      console.log(result)

      next()
  })
}