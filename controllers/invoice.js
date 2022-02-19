const Invoice = require("../models/Invoice")

const getAllInvoice = async (req, res) => {
    try {
        const { status } = req.query
        let invoice = []
        if (status) {
            invoice = await Invoice.find({ "status": status })
        } else {
            invoice = await Invoice.find({})
        }
        res.status(200).json({ "Invoice": invoice })
    } catch (err) {
        console.log(err)
        res.status(404).json({ "msg": "Invoice not found" })
    }
}

const getAInvoiceById = async (req, res) => {
    try {
        const invoice = await Invoice.findById(req.params.id)
        let today = new Date()
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
        let dateInvoice = invoice.duedate
        let datedue = dateInvoice.getFullYear() + '-' + (dateInvoice.getMonth() + 1) + '-' + (dateInvoice.getDate())
        if (date === datedue || date > datedue) {
            const updatedInvoice = await Invoice.findByIdAndUpdate(req.params.id, { "status": "Late" })
            return res.status(200).json({ "alert": "Payment required you are already late", "invoice": updatedInvoice })
        }
        else {
            res.status(200).json({ "invoice": invoice })
        }
    } catch (err) {
        console.log(err)
        res.status(404).json({ "msg": "Invoice not found" })
    }
}

const createAInvoice = async (req, res) => {
    try {
        const newInvoice = await Invoice.create(req.body)
        res.status(201).json({ "Invoice": newInvoice })
    } catch (err) {
        console.log(err)
        res.status(500).json("Can't be able to create an invoice.")
    }
}

const updateAInvoice = async (req, res) => {
    try {
        const updatedInvoice = await Invoice.findByIdAndUpdate(req.params.id, req.body)
        if (!updateAInvoice) {
            return res.status(404).json("Invoice not found , try again by checking the id")
        }
        res.status(200).json({ "updated Invoice": updatedInvoice })
    } catch (err) {
        console.log(err)
        res.status(500).json("Unable to updated try again later")
    }
}

const deleteAInvoice = async (req, res) => {
    try {
        const invoicerowcheck = await Invoice.findById(req.params.id)
        if (!invoicerowcheck) {
            return res.status(404).json({ "msg": "invoice row not found." })
        }
        await Invoice.findByIdAndDelete(req.params.id)
        res.status(204).json({ "Invoice": "Deleted" })
    } catch (err) {
        console.log(err)
        res.status(500).json("Unable to delete try again later")
    }
}


module.exports = { createAInvoice, getAllInvoice, updateAInvoice, deleteAInvoice, getAInvoiceById }