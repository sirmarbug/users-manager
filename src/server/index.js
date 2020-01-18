const sgMail = require('@sendgrid/mail');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000;

const app = express();
app.use(bodyParser.json());
app.use(cors());

const sendMail = (to, subject, text) => {
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    console.log(to);
    sgMail.setApiKey('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');
    const msg = {
        from: 'no-repeat@domain.com',
        to,
        subject,
        text,
        html: `<strong>${text}</strong>`,
    };
    sgMail.send(msg);
}

app.post('/sendMail', (req, res) => {
    sendMail(req.body.to, req.body.subject, req.body.text);
    res.send({status: 'ok'});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))