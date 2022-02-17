const { getAInvoiceById, createAInvoice, updateAInvoice, deleteAInvoice, getAllInvoice } = require('../controllers/invoice')
const Invoice = require('../models/Invoice')

const router = require('express').Router()


router.get("/", getAllInvoice)

router.get("/:id", getAInvoiceById)

router.post("/", createAInvoice)

router.patch("/:id", updateAInvoice)

router.delete("/:id", deleteAInvoice)

module.exports = router