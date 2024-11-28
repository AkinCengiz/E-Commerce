const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User.js");


//RANDOM AVATAR
const createAvatar = () => {
    const randomNumber = Math.floor(Math.random() * 70);
    return `https://i.pravatar.cc/150?img=${randomNumber}`;
}


//CREATE-REGISTER USER START

router.post("/register",async (req,res)=>{
    try {
        const {username,password,email} = req.body;
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({error : "Email adresine ait kullanıcı zaten tanımlanmış..."})
        }
        const avatar = createAvatar();
        const passwordHash = await bcrypt.hash(password,7);
        const newUser = new User(
            {
                username : username, 
                password : passwordHash, 
                email : email,
                profileImage : avatar
            });

        await newUser.save();

        res.status(201).json(newUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Sunucu hatası..."});
    }
})
//CREATE USER END

//LOGIN USER START
router.post("/login",async(req,res) => {
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email});

        if(!user){
            return res.status(404).json({error : "Email adresine bağlı bir kullanıcı bulunamadı."});
        }

        const passwordCheck = await bcrypt.compare(password,user.password);
        if(!passwordCheck){
            return res.status(401).json({error : "Geçersiz parola..."});
        }
        // if(user.password !== password){
        //     return res.status(401).json({error : "Geçersiz parola..."});
        // }
        res.status(200).json({
            id : user._id,
            username : user.username,
            email : user.email,
            profileImage : user.profileImage,
            role : user.role
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Server hatası"});
    }
})

//LOGIN USER END



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

        if(updateData.password){
            updateData.password = await bcrypt.hash(updateData.password,7);
        }
        // const isEqual = await bcrypt.compare(updatedUser.password, updateData.password);
        // if(!isEqual){
        //     updateData.password = await bcrypt.hash(updateData.password,)
        // }

        

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