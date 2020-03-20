const PetController = require("../controllers/pet.controllers");

module.exports = app => {
  app.get("/api/pets/", PetController.index);
  app.post("/api/pet", PetController.create);
  app.get("/api/pet/:id", PetController.find);
  app.put("/api/pet/:id", PetController.update);
  app.delete("/api/pet/:id", PetController.destroy);
};