const express = require('express')
const fs = require('fs')
const nodemailer = require('nodemailer')
const app = express();
const port = 3000;

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'simonalt782@gmail.com',
        pass: 'wnji ssjs uqhf howz'
    }
})

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json();

app.use(express.static('public'));

app.get('/', (req,res) => {
    res.sendFile('index.html', (err) => {
        if (err){
            console.log(err);
        }
    })
});

app.post('/form', jsonParser, (req,res) => {
    const body = req.body;
    const firstname = body.firstname;
    const lastname = body.lastname;
    const email = body.email;
    const comments = body.comments;
    var data = '\nEntry: First name: ' + firstname + ' , Last name: ' + lastname + ' , Email: ' +email+ ' , Comments: ' + comments;
    fs.appendFile('formdata.txt', data, (err) =>{
        if (err) throw err;
    });
    var mailOptions = {
        from: 'simonalt782@gmail.com',
        to: email,
        subject: 'Confirmation of Sign Up',
        text: 'Thank you ' + firstname + ' ' + lastname + ' for signing up!\nWe will soon read your comment: "' + comments + '"'
    };
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error)

        }
        else{
            console.log('Email sent: ' + info.response)
        }
    });
    res.send(' POST by form.js - first name = ' + firstname + ' , lastname = ' + lastname + ' , email = ' +email+ ' , comments = ' + comments);
    // Save this data to signups.txt
})

app.listen(port, () => {
    console.log('My second app listening on port ' + port + '!')
});