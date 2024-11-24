const express = require("express");
const router = express.Router();


//Route yapısı dosyalarını içeri aktaralım
const productRoute = require("./products.js");
const categoryRoute = require("./categories.js");
const userRoute = require("./users.js");



//Route bilgileri oluşturuyoruz
router.use("/categories",categoryRoute);
router.use("/products",productRoute);
router.use("/users",userRoute);






module.exports = router;