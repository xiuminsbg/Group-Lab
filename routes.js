const express = require('express')
const router = express.Router()
const appleControl = require('./controllers/apples_controller')

router.get('/', appleControl.get)
router.get('/destroy', appleControl.destroy)

module.exports = router
