const {EMAIL_USER, EMAIL_PASS, RECIEVE_MAIL} = process.env
const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: `${EMAIL_USER}`,
        pass: `${EMAIL_PASS}`
    }
})

module.exports = {
    sendEmail: async (req, res) => {
        const {name, email, subject, message} = req.body
        let mailOptions = {
            from: `${EMAIL_USER}`,
            to: `${RECIEVE_MAIL}`,
            subject: subject,
            text: `Name: ${name}\nEmail: ${email}\n${message}`
        }

        // console.log(mailOptions)
        transporter.sendMail(mailOptions,
            function(error, info) {
                if (error) {
                    console.log(error)
                    res.sendStatus(500)
                } else {
                    res.status(200).send('Email sent: ' + info.response)
                }
            })
    }
}