const path = require('path')
var nodemailer = require('nodemailer')
var hbs = require('nodemailer-express-handlebars')
const axios = require('axios');

const sendMail = async (req, res) => {
    const { frommail, tomail, password } = req.body


    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: String(frommail),
            pass: String(password)
        }
    })

    const handlebarOptions = {
        viewEngine: {
            extName: ".handlebars",
            partialsDir: path.resolve('../views'),
            defaultLayout: false,
        },
        viewPath: path.resolve('../views'),
        extName: ".handlebars",
    }

    transporter.use('compile', hbs(handlebarOptions));

    var mailOptions = {
        from: String(frommail),
        to: String(tomail),
        subject: 'Your Invoice',
        template: 'email',
        context: {

        }

    }

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error)
        } else {
            console.log('Email sent: ' + info.response)
            res.status(200).json({ "Email": info.response })
        }
    })
}
module.exports = { sendMail }