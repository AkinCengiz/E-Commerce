const mongoose = require("mongoose");



const productShema = new mongoose.Schema({
    name : {type : String, required : true},
    img : {type : Array, default : [] },
    price : {type : Number, default : 0.00},
    description : {type : String, default : ""},
    colors : {type : Array, default : [] },
    sizes : {type : Array, default : ["XS","SM","M","L","XL","XXL"]},
    stockCode : {type : String, required : true}
});

const Product = mongoose.model("Product",productShema);
module.exports = Product;