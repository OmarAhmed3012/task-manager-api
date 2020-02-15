const sgMail = require('@sendgrid/mail')
//const {SENDGRID_API_KEY} = require('../../config/constrains')

const sendgridAPIKey = process.env.SENDGRID_API_KEY

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'omaraboshamaa@gmail.com',
        subject: 'Welcome from nodeJS',
        text: `Welcome to the app, ${name}. how are you doin.`
    })
}

const sendcancelemail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'omaraboshamaa@gmail.com',
        subject: 'Goodbye',
        text: `Goodbye ${name} hope see you again`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendcancelemail
}