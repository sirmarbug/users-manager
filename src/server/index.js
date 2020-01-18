const sgMail = require('@sendgrid/mail');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());
app.use(cors());

const sendMail = (to, subject, text) => {
  sgMail.setApiKey('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');
  const msg = {
    from: 'no-repeat@domain.com',
    to,
    subject,
    text,
    html: `<center><h1>USERS MANAGER</h1><h2>Twoje nowe hasło to</h2><strong>${text}</strong><center>`,
  };
  sgMail.send(msg);
}

app.get('/', (req, res) => {
  res.send('Api wykorzystywane na potrzeby aplikacji USER MANAGER');
});

app.post('/sendMail', (req, res) => {
  console.log(req.body);
  sendMail(req.body.to, req.body.subject, req.body.text);
  res.send({
    status: 'ok'
  });
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
