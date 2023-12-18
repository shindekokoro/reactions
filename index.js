import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import config from './config.js';

const router = express.Router();
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: config.EMAIL_HOST,
  port: 587,
  secure: false,
  auth: {
    user: config.USER,
    pass: config.PASS
  }
});

transporter.verify((error, success) => {
  if (error) {
    return console.log(error);
  } else if (success) {
    return console.log(`Server is ready to take messages`);
  } else {
    return console.error('Unexpected error.');
  }
});
router.post('/send', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const from = `"${name}" <${email}>`;
  const mail = {
    from: from,
    replyTo: from,
    to: config.EMAIL,
    subject: 'New Message from Portfolio Contact Form',
    text: `${from} has sent you a new message:\n\n ${message}`
  };
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      });
    } else {
      console.log(data);
      res.json({
        status: 'success'
      });
    }
  });
});

// Create APP and start server
const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(config.PORT || 3002);
