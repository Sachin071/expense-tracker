const express = require('express')
const { createCategoriesCtrl, fetchallCategoriesCtrl, updateCategoriesCtrl, deleteCategoriesCtrl } = require('../../controllers/categories/categoriesCtrl')
const categoriesRoute = express.Router()

categoriesRoute.post('/',createCategoriesCtrl)
categoriesRoute.get('/',fetchallCategoriesCtrl)
categoriesRoute.put('/update/:id', updateCategoriesCtrl)
categoriesRoute.delete('/delete/:id', deleteCategoriesCtrl)


module.exports = categoriesRoute