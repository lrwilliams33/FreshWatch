const express = require('express')

const { sendEmail } = require('../controllers/emailsController')

const router = express.Router()

router.get('/', sendEmail);
router.get('/', async (req, res) => {
  try {
    await sendEmail('test', 'item-test', '12234543');
    res.status(200).json({ message: 'Email routes complete' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router