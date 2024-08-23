const ProductController = require("../controllers/controller.product")


module.exports = (app) => {
    app.get("/api/products/", ProductController.findAllProducts);
    app.get("/api/products/:id", ProductController.findOneSingleProduct);
    app.post("/api/products/", ProductController.createNewProduct);
}