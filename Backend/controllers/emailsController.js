require('dotenv').config();
const { MailerSend, EmailParams, Sender, Recipient } = require("mailersend");

const sendEmail = async (req, res) => {
  try {
    console.log('Begin function');

    const apiKey = process.env.MAILER_SEND_API_KEY;
    if (!apiKey) {
      console.error('MAILER_SEND_API_KEY is not defined in .env file');
      return res.status(500).send('MailerSend API key is not defined');
    }

    const mailerSend = new MailerSend({ apiKey: apiKey });
    console.log('MailerSend instance created');

    const sentFrom = new Sender("freshwatch@trial-pxkjn41pzxp4z781.mlsender.net ", "Fresh Watch Team");
    // const recipients = [new Recipient("williamslandon333@gmail.com", "Landon")];
    const recipients = [new Recipient("t.lu@ufl.edu", "Terrance")];

    console.log('Recipients defined');

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setReplyTo(sentFrom)
      .setSubject("Your Item is About to Expire!")
      .setHtml("<strong>Eat it before it's fucking gone</strong>")
      .setText("This is the text content");

    console.log('Email parameters set');

    await mailerSend.email.send(emailParams);
    console.log('Email sent successfully');
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Internal server error in controller');
  }
}

module.exports = { sendEmail };
