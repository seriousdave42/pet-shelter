const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/petShelterDB', {
    useNewUrlParser : true,
    useUnifiedTopology: true
})
    .then(() => console.log("database connection established"))
    .catch(err => console.log("There was an error", err));