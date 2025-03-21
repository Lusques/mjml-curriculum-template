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

async function sendEmails() {
  for (const { nome, email } of emailList) {
    try {
      let emailHTML = fs.readFileSync("src/output/template.html", "utf8");
      const greetings = nome
        ? `Desenvolvedor Front-End com experiência para agregar ao time da ${nome}!`
        : "Desenvolvedor Front-End com experiência para agregar ao seu time!";
      emailHTML = emailHTML.replace(/{{greetings}}/g, greetings);
      await transporter.sendMail({
        from: `"Lucas Silva" <${process.env.EMAIL}>`,
        to: email,
        subject: nome
          ? `O Desenvolvedor Front-End que a ${nome} procura está aqui!`
          : "O Desenvolvedor Front-End que o seu time procura está aqui!",
        html: emailHTML,
        attachments: [
          {
            filename: "Curriculo_Frontend_Lucas_Silva.pdf",
            path: "src/assets/curriculo_lucas_silva.pdf",
          },
        ],
      });
      console.log(`Email enviado para: ${email}!`);
    } catch (error) {
      console.error(`Erro ao enviar email para ${email}:`, error);
    }
  }
}

sendEmails();
