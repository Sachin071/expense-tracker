const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const transactionSchema = mongoose.Schema(
    {
        title: {
            type : mongoose.Schema.Types.ObjectId, // Must be mongodb Id
            ref : 'category',
            required : [true, "categories is required "]
        },
        
        description:{
            type : String,
            required : [true,"Description is required"]
        },

        type: {
            type : String,
            required : [true, "Transaction type is required "]
        },

        amount : {
            type : Number,
            required : [true,"Amount is required"]
        },

        date : {
            type : Date,
            required : [true,"Date is required"]
        },

        user:{
            type : mongoose.Schema.Types.ObjectId, // Must be mongodb Id
            ref : 'user',
            required : [true, "User id is required"]
        }
    },
    {
        toJSON : {
            virtuals : true,
        },

        toObject : {
            virtuals : true,
        }
    }
)

// Pagination
transactionSchema.plugin(mongoosePaginate);


const Transaction= mongoose.model('transaction',transactionSchema)

module.exports = Transaction