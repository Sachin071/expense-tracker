const expressAsyncHandler = require('express-async-handler')
const Categories = require('../../model/categories')



// Create Transaction

const createCategoriesCtrl = expressAsyncHandler(async(req,res)=>{
    const {categoriesName} = req?.body
    try {
        const categories = await Categories.create({
            categoriesName
        })
        res.status(200).json(categories)
    } catch (error) {
        res.json(error)
    }
})

// Fetch all

const fetchallCategoriesCtrl = expressAsyncHandler(async (req,res)=> {
    try {
        const categories = await Categories.find({});
        res.status(200).json(categories)
    } catch (error) {
        res.status(500).json(error)
    }
})

// Update Categories

const updateCategoriesCtrl = expressAsyncHandler(async (req,res)=>{
    const {id} = req?.params;
    const {categoriesName} = req?.body
    try {
        const categories = await Categories.findByIdAndUpdate(
            id,
            {
                categoriesName
            },
            {new : true}
        )
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json(error);
    }
})


// Delete Categories

const deleteCategoriesCtrl = expressAsyncHandler(async (req,res)=>{
    const {id} = req?.params;
    try {
        await Categories.findByIdAndDelete(id);
        res.json("Successfully deleted categories");
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = {createCategoriesCtrl , fetchallCategoriesCtrl , updateCategoriesCtrl, deleteCategoriesCtrl}
