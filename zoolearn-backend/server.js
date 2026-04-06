require("dotenv").config();   // loads .env

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const Phylum = require("./models/phylum");


// middlewares
app.use(express.json());
app.use(cors());

// connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("DB Connected ✅"))
    .catch(err => console.log("DB Error:", err));

// test route
app.get("/", (req, res) => {
    res.send("Zoolearn API Running 🚀");
});

app.get("/phylums", async (req, res) => {
    const data = await Phylum.find().sort({ index: 1 });
    res.json(data);
});

// start server
app.listen(process.env.PORT, () => {
    console.log("Server running on port", process.env.PORT);
});