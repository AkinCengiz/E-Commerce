const express = require("express");
const router = express.Router();
const Coupon = require("../models/Coupon.js");

//GET COUPON

router.get("/",async (req,res) => {
    try {
        const coupons = await Coupon.find();
        res.status(200).json(coupons);
    } catch (error) {
        console.log(err);
        res.status(500).json({error:error.message});
    }
})

//GETBYID
router.get("/byid/:id", async(req,res) => {
    try {
        const couponId = req.params.id;
        const coupon = await Coupon.findById(couponId);

        if(!coupon){
            return res.status(404).json({error : "Coupon not found!!!"});
        }
        res.status(200).json(coupon);
    } catch (error) {
        console.log(err);
        res.status(500).json({error:error.message});
    }
})

//GETBYCouponCode COUPON
router.get("/:couponcode",async(req,res) => {
    try {
        const couponCode = req.params.couponcode;
        const coupon = await Coupon.findOne({code : couponCode});
        if(!coupon){
            return res.status(404).json({error : "Coupon not found!!!"});
        }
        const {discount, expired,count} = coupon;
        res.status(200).json({discount, expired,count});
    } catch (error) {
        console.log(err);
        res.status(500).json({error:error.message});
    }
})

//CREATE COUPON

router.post("/",async (req,res) => {
    try {
        const newCoupon = new Coupon(req.body);
        await newCoupon.save();
        res.status(201).json(newCoupon);
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Sunucu hatası..."});
    }
})


//UPDATE COUPON
router.put("/:id",async(req,res) => {
    try {
        const couponId = req.params.id;
        const updatedInfo = req.body;

        const selectedCoupon = await Coupon.findById(couponId);

        if(!selectedCoupon){
            return res.status(404).json({error : "Coupon not found!!!"});
        }
        const updatedCoupon = await Coupon.findByIdAndUpdate(couponId,updatedInfo,{new:true});
        res.status(200).json(updatedCoupon);
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Sunucu hatası..."});
    }
})

//DELETE COUPON
router.delete("/:id",async(req,res) => {
    try {
        const couponId = req.params.id;
        const deletedCoupon = await Coupon.findByIdAndDelete(couponId);

        if(!deletedCoupon){
            return res.status(404).json({error : "Coupon not found..."});
        }
        //res.status(200).json({message : "Coupon delete succesfully..."});
        res.status(200).json(deletedCoupon);
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Sunucu hatası..."});
    }
})

module.exports = router;