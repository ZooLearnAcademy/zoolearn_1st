const mongoose = require("mongoose");

const phylumSchema = new mongoose.Schema({
    index: Number,
    name: String,
    data: Object
}, { timestamps: true });

module.exports = mongoose.model("Phylum", phylumSchema);