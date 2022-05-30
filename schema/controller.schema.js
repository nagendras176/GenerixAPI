const mongoose = require('mongoose');


const ControllerSchema = new mongoose.Schema({
     id: String,
     controllerName: String
});


module.exports = {
    controllerSchema: ControllerSchema
}