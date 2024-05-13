require('dotenv').config()
const { MailerSend, EmailParams, Sender, Recipient } = require("mailersend");

const sendEmail = async () => {
  try {
    const mailerSend = new MailerSend({
      apiKey: process.env.MAILER_SEND_API_KEY,
    });

    const sentFrom = new Sender("freshwatchofficial@gmail.com", "Fresh Watch Team");

    const recipients = [
      new Recipient("williamslandon333@gmail.com", "Landon")
    ];

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setReplyTo(sentFrom)
      .setSubject("Your Item is About to Expire!")
      .setHtml("<strong>This is the HTML content</strong>")
      .setText("This is the text content");

    await mailerSend.email.send(emailParams);
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

module.exports = {
    sendEmail
}