const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mainRoute = require("./controller/index.js");

const port = 5000;
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB connected")
    } catch (error) {
        throw error;
    }
}

app.use(express.json());
app.use(cors());
app.use("/api",mainRoute);

app.listen(port, () => {
    connect();
    console.log(`Sunucu ${port} üzerinden çalışıyor..`);
})