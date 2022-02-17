const nodemailer = require('nodemailer')

const sendMail = (req, res) => {

    const { frommail, tomail, password } = req.body
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        tls: {
            rejectUnauthorized: false
        },
        auth: {
            user: String(frommail),
            pass: String(password)
        }
    })

    let mailOptions = {
        from: String(frommail),
        to: String(tomail),
        subject: 'Checking',
        text: 'Text checking mail'
    }

    transporter.sendMail(mailOptions, (error, response) => {
        if (error) {
            console.log(error)
            res.status(500).json({ 'error': error })
        } else {
            console.log(response)
            res.status(200).json({ 'response': response })
        }
    })
}

module.exports = { sendMail }