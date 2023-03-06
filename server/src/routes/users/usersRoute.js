const express = require("express");
const { registerUser, fetchUsers, 
    loginUserCtrl,
    userProfileCtrl,
    postTransactionCtrl, 
    updateUserTransactionCtrl, 
    postCategoryCtrl} 
    = require("../../controllers/users/usersCtrl");
const userRoute = express.Router();

userRoute.post('/register', registerUser);
userRoute.get('/user-profile/:id', userProfileCtrl)
userRoute.post('/post-category/:id', postCategoryCtrl)
userRoute.post('/post-transaction/:id', postTransactionCtrl);
userRoute.post('/login', loginUserCtrl);
userRoute.get('/',fetchUsers);
userRoute.put('/user-profile/update/:id', updateUserTransactionCtrl);

module.exports = userRoute;
