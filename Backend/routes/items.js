const express = require('express')
const {
  getItems, 
  getItem, 
  createItem, 
  deleteItem, 
  updateItem
} = require('../controllers/itemsController')

const router = express.Router()

// GET all items
router.get('/', getItems)

// GET a single item
router.get('/:id', getItem)

// POST a new item
router.post('/', createItem)

// DELETE a item
router.delete('/:id', deleteItem)

// UPDATE a item
router.patch('/:id', updateItem)

module.exports = router