const express = require('express')
const router = express.Router()
const editController = require('../controllers/edit')

// Handles editing and deleting items, and rendering the edit page 

// id is passed in from ejs
router.get('/:id', editController.getEdit)
router.get('/remove/:id', editController.deleteItem)
router.post('/:id', editController.updateItem)


module.exports = router