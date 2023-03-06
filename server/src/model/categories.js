const mongoose = require('mongoose');

const categoriesSchema = mongoose.Schema({
    categoriesName : {
        type : String,
        required : true
    }
})

const Categories= mongoose.model('category',categoriesSchema)

module.exports = Categories