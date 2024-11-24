const express = require("express");
const router = express.Router();
const User = require("../models/User.js");



//CREATE USER START

router.post("/",async (req,res)=>{
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Sunucu hatası..."});
    }
})

//CREATE USER END


//GET USERS START
router.get("/",async (req,res) => {
    try {
        const users = await User.find();        
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Sunucu hatası..."});
    }
})

//GET USERS END

//****************************** */

//GET USER START

router.get("/:userId",async (req,res) => {
    try {
        const userId = req.params.userId;
        const user = await User.findById(userId);

        if(!user){
            return res.status(404).json({error : "Kullanıcı bulunamadı..."});
        }

        res.status(200).json(user);

    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Sunucu hatası..."});
    }
})

//GET USER END

//UPDATE USER START 

router.put("/:userId",async(req,res) => {
    try {
        const userId = req.params.userId;
        const updateData = req.body;

        const updatedUser = await User.findById(userId);
        if(!updatedUser){
            return res.status(404).json({error : "Kullanıcı bulunamadı..."});
        }

        const updating = await User.findByIdAndUpdate(userId,updateData);
        res.status(200).json(updating);
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Sunucu hatası..."});
    }
})

//UPDATE USER END 


//DELETE USER START


router.delete("/:userId", async (req,res) => {
    try {
        const userId = req.params.userId;

        const deletedUser = await User.findByIdAndDelete(userId);

        if(!deletedUser){
            return res.status(404).json({error : "Kullanıcı bulunamadı..."});
        }

        res.status(200).json(deletedUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Sunucu hatası..."});
    }
})

//DELETE USER END





module.exports = router;