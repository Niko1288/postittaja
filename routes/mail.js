var express = require('express');
var router = express.Router();

var api_key = require('../config/keyconfig');
var domain = require('../config/keyconfig');


var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});


router.post('/', (req, res, next) => {
    let to = req.body.to;
    let subject = req.body.subject;
    let text = req.body.text;
    // console.log(to, subject, text);

    var data = {
        from: 'Banana <postmaster@basicneeds.space>',
        to: to,
        subject: subject,
        text: text
    };


    mailgun.messages().send(data, function (error, body) {
        console.log(body);
    })

    res.send('hello mailgun');
});

module.exports = router;