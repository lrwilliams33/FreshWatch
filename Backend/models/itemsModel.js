const mongoose = require('mongoose')

const Schema = mongoose.Schema

const itemsSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  expirationDate: {
    type: Date,
    required: true
  },
  user_id:{
    type: String,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('items', itemsSchema)