const expressAsyncHandler = require('express-async-handler');
const User = require("../../model/User");

const registerUser = expressAsyncHandler(async (req,res)=>{
    const{ email,name,password,confirmPassword } = req?.body;
    //Check if user exists
    const userExist = await User.findOne({ email})
    if(userExist){
        return res.json({
            message : "Email already exists",
            status : false,
        })
    }

    try {
        const user = await User.create({email,name,password,confirmPassword})
        // res.status(200).json(user)
        return res.json({
            message:"user created successfully",
            status:true,
        })

    } catch (error) {
        res.json(error)
    }
});

// Fetch All users

const fetchUsers = expressAsyncHandler(async(req,res)=>{
    try {
        const users = await User.find({})
        res.json(users)
    } catch (error) {
        res.json(error)
    }
})

// Login User

const loginUserCtrl = expressAsyncHandler(async (req,res)=>{
    const {email,password}= req?.body
    // Check user in db  
    const userFound = await User.findOne({email})
    
    // Check if ther password match
    if(userFound && (await userFound?.isPasswordMatch(password))){
        return res.json({
            status : true,
            _id : userFound?._id,
            name : userFound?.name,
            email : userFound?.email,
            // token : generateToken(userFound?._id)
        })
    } else{
        return res.status(false);
    }
    
})



// user Profile

const userProfileCtrl = expressAsyncHandler(async (req,res) =>{
    


    try {
        const userProfile = await User.findById(req.params.id);
        res.json(userProfile);
    }
    catch (error) {
        console.log(error)
    }
})

// Transaction Category Post

const postCategoryCtrl = expressAsyncHandler(async(req, res)=>{
    const categoryPost = {category : req.body.transaction.title.category}

    User.findByIdAndUpdate(req.params.id,
        {$push : {"transaction.title" : categoryPost},
        function (error, success) {
            if (error) {
                return res.json({status : 'false'});
            } else {
                console.log(success);
                return res.json({
                    message:"sucesss",
                    status : true,
                })
            }  
        }}    
    );
})


// user Transaction Post

const postTransactionCtrl = expressAsyncHandler(async (req, res) =>{
    
        const transactionPost = {
            title: req.body.title, 
            description: req.body.description, 
            amount: req.body.amount, 
            type: req.body.type, 
            date : req.body.date
        };

        User.findByIdAndUpdate(
            req.params.id, 
            {$push:{transaction: transactionPost}},
            function (error, success) {
                if (error) {
                    return res.json({status : 'false'});
                } else {
                    console.log(success);
                    return res.json({
                        message:"sucesss",
                        status : true,
                    })
                }
            });  
    }
)

// user Transaction update

const updateUserTransactionCtrl = expressAsyncHandler(async (req,res)=>{
    // const id = req?.params.id;
    // console.log(id);
    const transactionUpdate = {
        name : req.body.name,
        title: req.body.transaction.title, 
        description: req.body.transaction.description, 
        amount: req.body.transaction.amount, 
        type: req.body.transaction.type, 
        date : req.body.transaction.date
    };
        await User.findByIdAndUpdate(
            req.params.id,{"transaction._id" : req.body._id},
            {$set:{"transaction.$" : transactionUpdate}},
            function (error, success) {
                if (error) {
                    return res.json({status : 'false'});
                } else {
                    console.log(success);
                    return res.json({
                        message:"sucesss",
                        status : true,
                    })
                }
            })    
        
})


module.exports = {registerUser,fetchUsers,loginUserCtrl, userProfileCtrl, postCategoryCtrl, postTransactionCtrl, updateUserTransactionCtrl  }