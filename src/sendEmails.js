const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });

const nodemailer = require("nodemailer");
const fs = require("fs");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_ACCESS_KEY,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const emailList = JSON.parse(fs.readFileSync("src/emails.json", "utf8"));
const emailHTML = "HTML CODE";

async function sendEmails() {
  for (const { email } of emailList) {
    try {
      await transporter.sendMail({
        from: `"Lucas Silva" <${process.env.EMAIL}>`,
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
