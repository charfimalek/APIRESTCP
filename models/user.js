const mongoose = require ('mongoose')
const test = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        
    },
    lastname: {
        type: String,
        required: true,
        
    },
    age : {
        type:Number,
        required: true,
    }

})

module.exports = mongoose.model('mydatabase',test)