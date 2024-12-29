const express = require("express");
const router = express.Router();


//Route yapısı dosyalarını içeri aktaralım
const productRoute = require("./products.js");
const categoryRoute = require("./categories.js");
const userRoute = require("./users.js");
const couponRoute = require("./coupons.js");
const paymentRoute = require("./payment.js");



//Route bilgileri oluşturuyoruz
router.use("/categories",categoryRoute);
router.use("/products",productRoute);
router.use("/users",userRoute);
router.use("/coupons",couponRoute);
router.use("/payment",paymentRoute)





module.exports = router;