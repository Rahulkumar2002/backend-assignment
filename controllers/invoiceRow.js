const InvoiceRow = require("../models/InvoiceRow")

const getAInvoiceRow = async (req, res) => {
    try {
        const invoicerow = await InvoiceRow.findById(req.params.invoicerowId)
        if (!invoicerow) {
            return res.status(404).json({ "Invoice row": "Invoice with id not found." })
        }
        res.status(200).json({ "Invoice row": invoicerow })
    } catch (err) {
        console.log(err)
        res.status(500).json({ "Invoice row": "Some server error occured" })
    }
}

const getAllInvoiceRowOFAInvoice = async (req, res) => {
    try {
        const invoiceById = await InvoiceRow.find({ invoiceId: req.params.invoiceid })
        if (!invoiceById) {
            return res.status(404).json({ "Invoice ": "Invoice rows with id not found." })
        }
        res.status(200).json({ "Every row of one invoice": invoiceById })
    } catch (err) {
        console.log(err)
        res.status(500).json({ "Invoice row": "Some server error occured" })
    }
}

const createAInvoiceRow = async (req, res) => {
    try {
        const newInvoiceRow = await new InvoiceRow(req.body)
        const savedInvoiceRow = await newInvoiceRow.save()
        res.status(201).json({ "Invoice row": savedInvoiceRow })
    } catch (err) {
        console.log(err)
        res.status(500).json({ "Invoice row": "Some server error occured" })
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
        res.status(500).json({ "Invoice row": "Some server error occured" })
    }
}

const updateAInvoiceRow = async (req, res) => {
    try {
        const invoiceRow = await InvoiceRow.findByIdAndUpdate(req.params.invoicerowId, req.body)
        if (!invoiceRow) {
            return res.status(404).json({ "msg": "invoice row not found." })
        } else {
            res.status(200).json({ "updated invoice row": invoiceRow })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({ "Invoice row": "Some server error occured" })
    }
}

module.exports = { getAInvoiceRow, getAllInvoiceRowOFAInvoice, createAInvoiceRow, deleteAInvoiceRow, updateAInvoiceRow }