const express = require('express')

const { getICalendar } = require('../controllers/iCalendarController')

const router = express.Router()

router.get('/', getICalendar)

module.exports = router