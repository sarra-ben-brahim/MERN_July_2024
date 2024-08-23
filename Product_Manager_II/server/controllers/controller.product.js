// the controller does the CRUD for the DB
// import the model here
const Product = require("../models/model.product")

// READ ALL
module.exports.findAllProducts = (req, res) => {
    Product.find() //[]
        .then((AllProducts) => {
            console.log(">>> this is All My Products ", AllProducts)
            res.json(AllProducts)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

//? READ ONE
module.exports.findOneSingleProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(oneSingleProduct => {
            res.json(oneSingleProduct)
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}

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