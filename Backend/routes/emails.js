const express = require('express')

const {
  sendEmail
} = require('../controllers/emailsController')

const router = express.Router()

router.post('/send-email', async (req, res) => {
  try {
    await sendEmail();
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router