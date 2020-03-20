const Pet = require("../models/pet.model");

module.exports.index = (req, res) => {
  Pet.find().sort('petType')
    .then(pets => res.json({ pets : pets }))
    .catch(err => res.status(400).json(err));
};

module.exports.find = (req, res) => {
	Pet.findOne({ _id: req.params.id })
		.then(pet => res.json({ pet : pet }))
		.catch(err => res.status(400).json(err));
};

module.exports.create = (req, res) => {
  Pet.create(req.body)
    .then(newPet => res.json({ pet : newPet }))
    .catch(err => res.status(400).json(err));
};

module.exports.update = (req, res) => {
  Pet.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true, context: 'query' })
    .then(updatedPet => res.json({ pet : updatedPet }))
    .catch(err => res.status(400).json(err));
};

module.exports.destroy = (req, res) => {
  Pet.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result : result }))
    .catch(err => res.status(400).json(err));
};