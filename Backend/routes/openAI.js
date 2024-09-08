const express = require('express')

const {runPrompt} = require('../controllers/openAIController')

const router = express.Router()

router.get('/', runPrompt)

module.exports = router