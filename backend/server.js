const express = require("express");
const mongoose = require("mongoose");

const app = express();
const cors = require("cors");

const port = 5000;

const connect = async () => {
    try {
        await mongoose.connect("mongodb+srv://akincengiz:Bjk1903@akincengiz.khf0v.mongodb.net/");
        console.log("MongoDB connected")
    } catch (error) {
        throw error;
    }
}

app.use(express.json());
app.use(cors());

app.listen(port, () => {
    connect();
    console.log(`Sunucu ${port} üzerinden çalışıyor..`);
})