const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "login",
    pass: "password",
  },
});

const emailList = ["email@gmail.com", "email2@gmail.com"];
const emailHTML = "HTML CODE";

async function sendEmails() {
  for (const email of emailList) {
    try {
      await transporter.sendMail({
        from: "meu email",
        to: email,
        subject: "título do email",
        html: emailHTML,
      });
      console.log(`Email enviado para: ${email}!`);
    } catch (error) {
      console.error(`Erro ao enviar email para ${email}:`, error);
    }
  }
}

sendEmails();
