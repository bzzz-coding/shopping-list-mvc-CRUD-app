const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')

// Handles initial get request for the homepage
// Handles POST method request for adding a new task

// Add specific routes for specific tasks
router.get('/', homeController.getIndex)
router.post('/', homeController.addItem)


module.exports = router