const { sendMail } = require('../controllers/mailer')

const router = require('express').Router()

router.get("/", sendMail)

module.exports = router