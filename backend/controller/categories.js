const express = require("express");
const Category = require("../models/Category.js");
const app = express();

//CREATE CATEGORY START

app.post("/",async(req,res) => {
    try {
        const {name,image} = req.body;
        const newCategory = new Category({name,image});
        await newCategory.save();
        res.status(200).json(newCategory);
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Server hatası"});
    }
})
//CREATE CATEGORY END


 //GET CATEGORIES START
app.get("/",async(req,res) => {
    try {
        const categories = await Category.find();
        res.status(201).json(categories);
    } catch (error) {
        console.error(error);
        res.status(500).json({error:error.message});
    }
})
 //GET CATEGORIES END


 //GET CATEGORY START
app.get("/:categoryId",async (req,res) => {
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
app.put("/:categoryId",async(req,res) => {
    try {
        const categoryId = req.params.categoryId;
        const updatedCategory = req.body;

        const category = await Category.findById(categoryId);

        if(!category){
            return res.status(404).json({error : "Kategori bulunamadı."});
        }

        const newCategory = await Category.findByIdAndUpdate(categoryId,updatedCategory);
        res.status(200).json(newCategory);

    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Sunucu hatası..."});
    }
})
 //UPDATE CATEGORY END

 //DELETE CATEGORY START
app.delete("/:categoryId",async(req,res) => {
    try {
        const categoryId = req.params.categoryId;
        const deletedCategory = await Category.findByIdAndDelete(categoryId);

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