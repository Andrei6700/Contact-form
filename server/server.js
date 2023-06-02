const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");
const config = require('./config');
let app = express();
const path = require('path');
const router = express.Router()

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
        user: config.auth.user,
        pass: config.auth.pass
    },
});

app.post('/mail', (req, res, next) => {
    var name = req.body.name
    var email = req.body.email
    var message = req.body.message
    var urgent = req.body.telefon


    const mailOptions = {
        from: `Message From Contact Form `,
        to: `andreibalanoiu67@gmail.com`,
        subject: "Data from Form",
        Text: ` 
        Name: ${name}
        Email:${email}
        Message: ${message}
        Urgent: ${urgent}
            `
    }

    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            res.json({
                status: "error"
            })
            console.log(err)
        }
        else {
            res.json({
                status: "success"
            })
            console.log("Email Sent" + data.response)
        }
    })
})

transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is ready to take our messages!");
    }
});

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.info(`server has started on ${PORT}`))