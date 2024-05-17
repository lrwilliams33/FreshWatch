require('dotenv').config();
const { MailerSend, EmailParams, Sender, Recipient } = require("mailersend");

const sendEmail = async (userEmail, title, expirationDate) => {
  try {
    console.log('Begin function');

    const apiKey = process.env.MAILER_SEND_API_KEY;
    if (!apiKey) {
      return console.error('MAILER_SEND_API_KEY is not defined in .env file');
      // return res.status(500).send('MailerSend API key is not defined');
    }

    const mailerSend = new MailerSend({ apiKey: apiKey });

    const sentFrom = new Sender("freshwatch@trial-pxkjn41pzxp4z781.mlsender.net ", "Fresh Watch Team");
    // const recipients = [new Recipient("williamslandon333@gmail.com", "Landon")];
    const recipients = [
      // new Recipient("terrylu12212@gmail.com", "Terrance"),
      new Recipient("williamslandon333@gmail.com", "Terrance"),
      // new Recipient(userEmail, "User"),
    ];

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setReplyTo(sentFrom)
      .setSubject(`Your is About to Expire!\nItem: ${title}`)
      .setHtml(`<strong>Expiration date: ${expirationDate}</strong>`)
      .setText("This is the text content");

    await mailerSend.email.send(emailParams);
    console.log('Email sent successfully from emailsController');
    //res.status(200).send('Email sent successfully from emailsController');
  } catch (error) {
    console.error('Error sending email:', error);
    //res.status(500).send('Internal server error in controller');
  }
}
// const sendEmail = async (req, res) => {
//   try {
//     const { userEmail, title, expirationDate } = req.query;
//     console.log('Begin function');

//     const apiKey = process.env.MAILER_SEND_API_KEY;
//     if (!apiKey) {
//       console.error('MAILER_SEND_API_KEY is not defined in .env file');
//       return res.status(500).send('MailerSend API key is not defined');
//     }

//     const mailerSend = new MailerSend({ apiKey: apiKey });

//     const sentFrom = new Sender("freshwatch@trial-pxkjn41pzxp4z781.mlsender.net ", "Fresh Watch Team");
//     // const recipients = [new Recipient("williamslandon333@gmail.com", "Landon")];
//     const recipients = [
//       // new Recipient("terrylu12212@gmail.com", "Terrance"),
//       new Recipient("williamslandon333@gmail.com", "Terrance"),
//       // new Recipient(userEmail, "User"),
//     ];

//     const emailParams = new EmailParams()
//       .setFrom(sentFrom)
//       .setTo(recipients)
//       .setReplyTo(sentFrom)
//       .setSubject(`Your is About to Expire!\nItem: ${title}`)
//       .setHtml(`<strong>Expiration date: ${expirationDate}</strong>`)
//       .setText("This is the text content");

//     await mailerSend.email.send(emailParams);
//     console.log('Email sent successfully from emailsController');
//     res.status(200).send('Email sent successfully from emailsController');
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).send('Internal server error in controller');
//   }
// }

module.exports = { sendEmail };
