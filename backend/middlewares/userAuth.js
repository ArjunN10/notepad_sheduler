const jwt  = require('jsonwebtoken')


function verifyToken(req,res,next){
    try {
    const token = req.headers['authorization']
    if(token){
        return res.status(200).json({
            status:"success",
            message:"user auth success"
        })
    } 
    jwt.verify(token,(err)=>{
        if(!err){
            response.status(403).json({error:"error"})
        }else{
            const decoded = jwt.verify(token,process.env.USER_ACCESS_TOKEN_SECRET);
            req.user = decoded
        }
        next()
    })
        
    } catch (error) {
      res.status(401).json({
        error:'error',
        message:"Unauthorized"
      })  
    }
}
    

module.exports = verifyToken