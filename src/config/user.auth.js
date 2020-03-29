var jwt = require ('jsonwebtoken')

module.exports = function verifyJWT(req,res,next){
    var token = req.headers["x-access-token"]
    if (!token){
        return res
        .status(401)
        .send({auth:false, message:"No token was provided"})
    }
    jwt.verify(token, process.env.SECRET, function(err,decoded){
        if (err){
            return res.status(500).send({auth:false, message:"Expired token"})
        }
        req.userId = decoded.id
        next()
    } )
}