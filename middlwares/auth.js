const jwt=require('jsonwebtoken');
const User=require('../models/User');

const auth=async(req,res,next)=>{
    try{
        const token=req.headers.authorization.split(" ")[1];
        if(!token){
            return res.status(401).json({message:"not authorized, no token"});
        }
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        const user=await User.findById(decoded.id).select("-password");
        if(!user){
            return res.status(401).json({message:"User not found"});
        }
        req.user=user;
        next();
    }catch(err){
        console.log(err);
        return res.status(401).json({message:"Unauthorized access"});
    }
}

const authorize =(...roles)=>{
    return (req, res, next) => {
        if(!roles.includes(req.user.role)){
            return res.status(403).json({message:"Unauthorized access"});
        }
        next();
    }
}

module.exports = { auth, authorize };