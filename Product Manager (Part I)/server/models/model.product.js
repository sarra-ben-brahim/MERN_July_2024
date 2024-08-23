//? import the mongoose lib to build the schema
const mongoose = require("mongoose")

//! the model - the rules the entries need to follow
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "{PATH} is required"],
        minLength: [2, "{PATH} must have at least 2 chars"]
    },
    price: {
        type: Number
    },
    description: {
        type: String
    } 
}, { timestamps: true })

const Product = mongoose.model("Product", ProductSchema)
module.exports = Product