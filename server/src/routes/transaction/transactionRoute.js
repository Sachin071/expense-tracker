const express = require('express')
const { createTransactionCtrl, fetchAllTransactionCtrl, fetchUserTransactionCtrl, updateTransactionCtrl, deleteTransactionCtrl } = require('../../controllers/transaction/transactionCtrl')
// const {createIncomeCtrl,fetchAllIncomeCtrl,fetchUserIncomeCtrl, updateIncomeCtrl, deleteIncCtrl} = require('../../controllers/income/incomeCtrl')
const authMiddleware = require('../../middlewares/authMiddleware')
const transactionRoute = express.Router()

transactionRoute.post('/',authMiddleware,createTransactionCtrl)
transactionRoute.get('/',authMiddleware,fetchAllTransactionCtrl)
transactionRoute.get('/:id',authMiddleware,fetchUserTransactionCtrl)
transactionRoute.put('/update/:id',authMiddleware,updateTransactionCtrl)
transactionRoute.delete('/delete/:id',authMiddleware,deleteTransactionCtrl)

module.exports = transactionRoute