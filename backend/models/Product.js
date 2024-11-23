const mongoose = require("mongoose");



const productShema = new mongoose.Schema({
    name : "",
    img : [],
    price : 0.0,
    description : "",
    colors : [],
    sizes : [],
    stockCode : ""
});

const Product = mongoose.model("Product",productShema);
module.exports = Product;