const mongoose = require('mongoose');


const inputNode = new mongoose.Schema({
    id:String,
    controller_id: String
});


module.exports = {
    inputNodeSchema: inputNode
}