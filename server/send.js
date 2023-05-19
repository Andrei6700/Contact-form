
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
   service: "gmail",
   auth: {
      user: "andreibalanoiu67@gmail.com",
      pass: "pfqxrgqwxjcmewgs"
   }
});

const mailOptions = {
   from: "andreibalanoiu67@gmail.com",
   to: "nicolaeandrei.balanoiu@ulbsibiu.ro",
   subject: "Mesaj",
   text: "Ba ce fain ii asta sa ma bata hamesterii"
};

transporter.sendMail(mailOptions, function(error, info){
   if(error){
      console.log(error);
   }else{
      console.log("Email sent: " + info.response);
   }
});
