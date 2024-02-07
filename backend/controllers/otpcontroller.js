const nodemailer =  require('nodemailer');
const Mailgen= require('mailgen');
const {EMAIL, PASSWORD} = require('../env.js')



const signup = async (req, res) =>{
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: "testAccount.user",
      pass: "testAccount.pass",
    },
  });
  
  let message = {
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  }

  transporter.sendMail(message).then((info)=>{
    return res.status(201).json({
      msg: "you  should receive an email",
      info: info.messageId,
      preview:nodemailer.getTestMmessageUrl(info)
    });
  }).catch(error =>{
    return res.status(500).json({error})
  })
  // res.status(201).json("Signup Success");
}

const getBill =(req, res) =>{

    const {userEmail} = req.body;

  let config = {
    service:'gmail',
    auth:{
      user:EMAIL,
      pass:PASSWORD
    }
  }

  let transporter = nodemailer.createTransport(config);
  let MailGenerator = new Mailgen({
    theme: "default",
    product:{
      name: "Mailgen",
      link: 'https://mailgen.js/'
    }
  })

  let response = {
    body:{
      name: "Daily",
      intro: "Your OTP is arrived",
      table:{
        data:[
          {
            item: "Nodemailer Stack Book",
            description: " A backend application"
          }
        ]
      },
      outro:  "Looking forward to do more business"
    }
  }

  let mail = MailGenerator.generate(response);
  let message = {
    from:EMAIL,
    to:userEmail,
    subject: "otp",
    html: mail   
  }

  transporter.sendMail(message).then(()=>{
    return res.status(201).json({
      msg: "Receive email"
    })
  }).catch(error =>{
    return res.status(500).json({error});
  })

  // res.status(201).json("get successfully");
}


module.exports = {
  signup,
  getBill
}