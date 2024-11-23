const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username : "",
    email : "",
    password : "",
    profileImage : "",
    isAdmin : false
});

const User = mongoose.model("User",userSchema);
module.exports = User;