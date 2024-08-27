const AuthorController = require("../controllers/controller.author")


module.exports = (app) => {
    app.get("/api/authors", AuthorController.findAllAuthors);
    app.get("/api/authors/:id", AuthorController.findOneSingleAuthor);
    app.post("/api/authors/new", AuthorController.createNewAuthor);
    app.patch("/api/authors/:id/edit", AuthorController.updateExistingAuthor);
    app.delete("/api/authors/:id", AuthorController.deleteAnExistingAuthor);
}