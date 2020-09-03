const mongoose = require('mongoose')


const msgSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    msg:{
        type: String,
        required: true
    },
    theDate:{
        type: Date,
        required:true,
        default: Date.now
    }
})

module.exports = mongoose.model('Messages', msgSchema)