require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const invoiceRoute = require('./routes/invoice')
const invoiceRowRoute = require('./routes/invoiceRow')
const invoiceMailer = require("./routes/mail")
const { connectTODB } = require('./db/connectTODB')
const app = express()
const port = process.env.PORT || 8080

//Connecting to DB:
connectTODB(process.env.MONGO_URI)

// middleware...
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))


app.use("/api/v1/invoices", invoiceRoute)
app.use("/api/v1/invoices/invoicerow", invoiceRowRoute)
app.use("/api/v1/mail", invoiceMailer)

const start = () => {
    try {
        app.listen(port)
        console.log("App is running at localhost:" + port)
    } catch (err) { console.log(err) }
}
start()
