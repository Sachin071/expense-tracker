const expressAsyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const User = require('../model/User')

const authMiddleware = expressAsyncHandler(async (req,res,next)=>{
    let token;
    
    if(req?.headers?.authorization?.startsWith('Bearer')){
        token = req?.headers?.authorization?.split(' ')[1];
        try {
            if(token){
                const decodedUser = jwt.verify(token, process.env.JWT_KEY);
                // find the User
                const user = await User.findById(decodedUser?.id)
                // Attach the user to the req object
                req.user = user;
                next()
            }
        } catch (error) {
            throw new Error("Not Authorize token expired")
        }
    }else{
        throw new Error("There is no token attached to the headers")
    }
})

module.exports = authMiddleware;