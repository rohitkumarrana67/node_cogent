var path = require("path");
var express = require("express");
var nodemailer = require("nodemailer");
var app = express();
var transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "rohitkumarrana67@gmail.com",
    pass: "rana67rohit@"
  }
});

var publicPath = path.join(__dirname, "/public");
app.set("view option", { layout: false });
app.use(express.static(publicPath));
app.get("/", (req, res) => {
  res.render("index.html");
});
app.get("/send", (req, res) => {
  var mailOptions = {
    from: "rohitkumarrna67@gmail.com",
    to: "yatharthverma070@gmail.com",
    subject: req.query.subject,
    text: "hello"
  };
  console.log(mailOptions);
  transporter.sendMail(mailOptions, function(error, response) {
    if (error) {
      console.log(error);
      res.end("error");
    } else {
      console.log("Message sent: " + response.message);
      res.end("sent");
    }
  });
  //   console.log("hello");
  //   return res.send({
  //     subject: req.query.subject
  //   });
});

app.listen(3000, () => {
  console.log("server is running");
});
