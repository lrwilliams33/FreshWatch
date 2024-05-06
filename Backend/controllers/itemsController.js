const Item = require('../models/itemsModel')
const mongoose = require('mongoose')

// get all items
const getItems = async (req, res) => {
  const items = await Item.find({}).sort({createdAt: -1})

  res.status(200).json(items)
}

// get a single item
const getItem = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such item'})
  }

  const item = await Item.findById(id)

  if (!item) {
    return res.status(404).json({error: 'No such item'})
  }

  res.status(200).json(item)
}

// create a new item
const createItem = async (req, res) => {
  const {title, expirationDate} = req.body

  // add to the database
  try {
    const item = await Item.create({ title, expirationDate })
    res.status(200).json(item)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a item
const deleteItem = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such item'})
  }

  const item = await Item.findOneAndDelete({_id: id})

  if(!item) {
    return res.status(400).json({error: 'No such item'})
  }

  res.status(200).json(item)
}

// update a item
const updateItem = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such item'})
  }

  const item = await Item.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!item) {
    return res.status(400).json({error: 'No such item'})
  }

  res.status(200).json(item)
}

module.exports = {
  getItems,
  getItem,
  createItem,
  deleteItem,
  updateItem
}