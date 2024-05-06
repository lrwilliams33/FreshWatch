const mongoose = require('mongoose')

const Schema = mongoose.Schema

//Adding Authentication Later

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: false //Change to true after authentication is required
    }
})

module.exports = mongoose.model('User', userSchema)