const InvoiceRow = require("../models/InvoiceRow")

const getAInvoiceRow = async (req, res) => {
    try {
        const invoicerow = await InvoiceRow.findById(req.params.invoicerowId)
        res.status(200).json({ "Invoice row": invoicerow })
    } catch (err) {
        console.log(err)
    }
}

const getAllInvoiceRowOFAInvoice = async (req, res) => {
    try {
        const invoiceById = await InvoiceRow.find({ invoiceId: req.params.invoiceid })
        res.json({ "Every row of one invoice": invoiceById })
    } catch (err) {
        console.log(err)
    }
}

const createAInvoiceRow = async (req, res) => {
    try {
        const newInvoiceRow = await new InvoiceRow(req.body)
        const savedInvoiceRow = await newInvoiceRow.save()
        res.status(201).json({ "Invoice row": savedInvoiceRow })
    } catch (err) {
        console.log(err)
    }
}

const deleteAInvoiceRow = async (req, res) => {
    try {
        const invoicerowcheck = await InvoiceRow.findById(req.params.invoicerowId)
        if (!invoicerowcheck) {
            return res.status(404).json({ "msg": "invoice row not found." })
        } else {
            await InvoiceRow.findByIdAndDelete(req.params.invoicerowId)
            res.status(204).json("Deleted")
        }
    } catch (err) {
        console.log(err)
    }
}

const updateAInvoiceRow = async (req, res) => {
    try {
        const invoiceRow = await InvoiceRow.findByIdAndUpdate(req.params.invoicerowId, req.body)
        res.status(200).json({ "updated invoice row": invoiceRow })
    } catch (err) {
        console.log(err)
    }
}

module.exports = { getAInvoiceRow, getAllInvoiceRowOFAInvoice, createAInvoiceRow, deleteAInvoiceRow, updateAInvoiceRow }