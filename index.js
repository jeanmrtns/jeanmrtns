const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");
const app = express();

require("dotenv").config();

let PORT = process.env.PORT;

let transporter = nodemailer.createTransport({
  host: "smtp.umbler.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.set("view engine", "ejs");

app.use((req, res, next) => {
  //Cria um middleware onde todas as requests passam por ele
  if ((req.headers["x-forwarded-proto"] || "").endsWith("http"))
    //Checa se o protocolo informado nos headers é HTTP
    res.redirect(`https://${req.headers.host}${req.url}`);
  //Redireciona pra HTTPS
  //Se a requisição já é HTTPS
  else next(); //Não precisa redirecionar, passa para os próximos middlewares que servirão com o conteúdo desejado
});

app.use(express.static(__dirname + "/views"));
app.use("/contato", express.static(path.join(__dirname, "contato")));
app.use("/sobre", express.static(path.join(__dirname, "sobre")));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/contato", (req, res) => {
  res.render("contato");
});

app.get("/sobre", (req, res) => {
  res.render("sobre");
});

app.post("/contato", (req, res) => {
  let email = req.body.emailaddress;
  let subject = req.body.subject;
  let message = req.body.message;

  transporter
    .sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: subject,
      text: message,
    })
    .then((info) => {
      console.log(info);
      res.send("Mensagem enviada com sucesso!");
    })
    .catch((error) => {
      console.log(error);
      res.send("Houve um erro no envio");
    });
});

app.use((req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
