const nodemailer = require("nodemailer");
require("dotenv").config();

// Configura el transporte de Nodemailer (cambia los valores)
const transporter = nodemailer.createTransport({
  host: "mail.privateemail.com",
  auth: {
    user: process.env.EMAIL_EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Ruta para enviar un correo electrónico
const sendEmail = (email, subject, text) => {
  const mailOptions = {
    from: process.env.EMAIL_EMAIL,
    to: email,
    subject: subject,
    text: text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error al enviar el correo:", error);
    } else {
      console.log("Correo enviado:", info.response);
    }
  });
};

module.exports = sendEmail;
