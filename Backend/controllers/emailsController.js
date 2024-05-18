require('dotenv').config();
const { formatDistanceToNow } = require('date-fns/formatDistanceToNow');
const { MailerSend, EmailParams, Sender, Recipient } = require("mailersend");

const sendEmail = async (userEmail, title, expirationDate, expired) => {
  try {
    console.log('Begin sending email');

    const apiKey = process.env.MAILER_SEND_API_KEY;
    if (!apiKey) {
      return console.error('MAILER_SEND_API_KEY is not defined in .env file');
    }

    const mailerSend = new MailerSend({ apiKey: apiKey });

    const sentFrom = new Sender("freshwatch@trial-pxkjn41pzxp4z781.mlsender.net ", "Fresh Watch Team");
    const recipients = [
      // new Recipient("terrylu12212@gmail.com", "Terrance"),
      new Recipient("williamslandon333@gmail.com", "Terrance"),
      // new Recipient(userEmail, "User"),
    ];

    let subject = '';
    if (expired) {
      subject = `Your item has expired: ${title}`;
    } else {
      subject = `Your item is about to expire: ${title}`;
    }

    let text = '';
    const formattedDate = formatDistanceToNow(new Date(expirationDate), { addSuffix: true });
    if (expired) {
      text = `Your item has expired ${formattedDate}!<br>Please discard it immediately!`;
    } else {
      text = `Your item is expiring ${formattedDate}!<br>Use it before it expires!`;
    }

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setReplyTo(sentFrom)
      .setSubject(subject)
      .setHtml(text)

    await mailerSend.email.send(emailParams);
    console.log('Email sent successfully from emailsController');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

module.exports = { sendEmail };
