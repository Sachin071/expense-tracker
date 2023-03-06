const expressAsyncHandler = require('express-async-handler')
const Transaction = require('../../model/transaction')
const moment = require('moment');


// Create Transaction

const createTransactionCtrl = expressAsyncHandler(async(req,res)=>{
    const {title, description, amount,date,type} = req?.body
    try {
        const transaction = await Transaction.create({
            title,
            description,
            amount,
            type,
            date,
            user : req?.user?._id
        })
        res.status(200).json({transaction})
    } catch (error) {
        res.json(error)
    }
})

// Fetch All Transactions 

const fetchAllTransactionCtrl = expressAsyncHandler(async (req,res)=>{
    const {page} = req?.query
    const transaction = await Transaction.paginate({
            date: {

                $gt: moment().subtract(req.body.frequency, 'days').toDate()
            }
        },
        {limit:10, page: Number(page), populate: ['user','title'] }
    ); 
    if(!transaction){
        res.status(500).json({success:false})
    }
    res.send(transaction);

})

// // Fetch user Transactions details
const fetchUserTransactionCtrl = expressAsyncHandler(async (req,res)=>{
    const {id} = req?.params
    try {
        const transaction = await Transaction.findById(id)
        res.json(transaction)
    } catch (error) {
        res.json(error)
    }
})

// // Update all the transaction

const updateTransactionCtrl = expressAsyncHandler(async (req,res)=>{
    const{id} = req?.params;
    const {title,description,amount,type,date} = req?.body;
    try{
        const transaction = await Transaction.findByIdAndUpdate(
            id,
            {
                title,
                description,
                amount,
                type,
                date,
                user : req?.user?._id
            },
            {new : true}
        )
        res.json(transaction)
    }
    catch(err){
        res.json(err)
    }
})

// Delete Transaction

const deleteTransactionCtrl = expressAsyncHandler(async (req,res)=>{
    const {id} = req?.params
    try {
        await Transaction.findByIdAndDelete(id)
        res.json("successful deleted")
    } catch (error) {
        res.json(error)
    }
})

module.exports = {
    createTransactionCtrl, 
    fetchAllTransactionCtrl, 
    fetchUserTransactionCtrl,
    updateTransactionCtrl,
    deleteTransactionCtrl
};



