// the controller does the CRUD for the DB
// import the model here
const Product = require("../models/model.product")


//? CREATE
module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
        .then(newlyCreatedProduct => {
            res.json(newlyCreatedProduct)
        })
        .catch((err) => {
            res.status(400).json(err)
        });

}