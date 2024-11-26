const express = require("express");
const router = express.Router()
const Category = require("../models/Category.js");

//CREATE CATEGORY START

router.post("/",async(req,res) => {
    try {
        const {name,image} = req.body;
        const newCategory = new Category({name,image});
        await newCategory.save();
        res.status(201).json(newCategory);
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Server hatası"});
    }
})
//CREATE CATEGORY END


 //GET CATEGORIES START
router.get("/",async(req,res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        console.error(error);
        res.status(500).json({error:error.message});
    }
})
 //GET CATEGORIES END


 //GET CATEGORY START
router.get("/:categoryId",async (req,res) => {
    try {
        const categoryId = req.params.categoryId;
        try {
            const category = await Category.findById(categoryId);
            res.status(200).json(category);
        } catch (error) {
            console.log(error);
            res.status(404).json({error : "Kategori bulunamadı."})
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Sunucu hatası"});
    }
})
 //GET CATEGORY END

 //UPDATE CATEGORY START
router.put("/",async(req,res) => {
    try {
        const updatedCategory = req.body;

        const category = await Category.findById(updatedCategory._id);

        if(!category){
            return res.status(404).json({error : "Kategori bulunamadı."});
        }

        const newCategory = await Category.findByIdAndUpdate(category._id,updatedCategory);
        res.status(200).json(newCategory);

    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Sunucu hatası..."});
    }
})
 //UPDATE CATEGORY END

 //DELETE CATEGORY START
router.delete("/",async(req,res) => {
    try {
        //const categoryId = req.params.categoryId;
        const category = req.body;

        const deletedCategory = await Category.findByIdAndDelete(category._id);

        if(!deletedCategory){
            return res.status(404).json({error : "Kategori bulunamadı..."});
        }
        res.status(200).json(deletedCategory);

    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Sunucu hatası..."});
    }
})
 //DELETE CATEGORY END

 module.exports = router;