const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const PetSchema = new mongoose.Schema ({
    petName: {
        type: String,
        unique: true,
        required: [true, "Pet name is required"],
        minlength: [3, "Pet name must be at least 3 characters"]
    },
    petType: {
        type: String,
        required: [true, "Pet type is required"],
        minlength: [3, "Pet type must be at least 3 characters"]
    },
    petDesc: {
        type: String,
        required: [true, "Pet description is required"],
        minlength: [3, "Pet description must be at least 3 characters"]
    },
    petSkill1: {
        type: String,
    },
    petSkill2: {
        type: String,
    },
    petSkill3: {
        type: String,
    }
}, {timestamps: true});

PetSchema.plugin(uniqueValidator, {message: "Pet name already exists, please choose a new one"});

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;