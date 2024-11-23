const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name : "",
    image : ""
});

const Category = mongoose.model("Category",categorySchema);
module.exports = Category;