const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");
const config = require('./config');
let app = express();
const path = require('path');
const router = express.Router()

const port = 4000;
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }),bodyParser.json());

let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
        user: config.auth.user,
        pass: config.auth.pass
    },
});

app.post('/mail', async(req, res) => {
    console.log(req.body);
    const { name, email, message, urgent } = req.body;

    const msg = {
        from: '"Test" <test@gmail.com>',
        to: 'sevafa4757@rockdian.com', 
        subject: 'Data from Form',
        text: `
            Name: ${name}
            Email: ${email}
            Message: ${message}
            Urgent: ${urgent}
        `
    };

    try {
        const info = await transporter.sendMail(msg);

        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        res.send('Email Sent!');
    } catch (error) {
        console.error('Error occurred while sending email:', error);
        res.status(500).send('Error occurred while sending email');
    }
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
