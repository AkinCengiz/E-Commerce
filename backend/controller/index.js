const express = require("express");
const router = express.Router();


//Route yapısı dosyalarını içeri aktaralım
const productRoute = require("./products.js");
const categoryRoute = require("./categories.js");



//Route bilgileri oluşturuyoruz
router.use("/categories",categoryRoute);
router.use("/products",productRoute);






module.exports = router;