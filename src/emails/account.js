const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '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')

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'omaraboshamaa@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'omaraboshamaa@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}