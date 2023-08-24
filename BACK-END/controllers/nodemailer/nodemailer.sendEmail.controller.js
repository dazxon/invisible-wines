const nodemailer = require("nodemailer");
require("dotenv").config();
const { EMAIL_EMAIL, EMAIL_PASSWORD, EMAIL_SMTP } = process.env;

const transporter = nodemailer.createTransport({
  host: EMAIL_SMTP,
  auth: {
    user: EMAIL_EMAIL,
    pass: EMAIL_PASSWORD,
  },
});

/**
 * Send an email using the configured transporter.
 *
 * @param {string} email - The recipient's email address.
 * @param {string} subject - The subject of the email.
 * @param {string} text - The plain text content of the email.
 * @returns {void}
 */
const sendEmail = (email, subject, html) => {
  const mailOptions = {
    from: EMAIL_EMAIL,
    to: email,
    subject: subject,
    html: html,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error", error.message);
    } else {
      console.log(`Email sent to: ${email}`, info.response);
    }
  });
};

module.exports = sendEmail;
