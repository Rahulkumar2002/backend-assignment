const { getAInvoiceRow, getAllInvoiceRowOFAInvoice, createAInvoiceRow, deleteAInvoiceRow, updateAInvoiceRow } = require('../controllers/invoiceRow')

const router = require('express').Router()


router.get("/:invoicerowId", getAInvoiceRow)

router.get("/allrows/:invoiceid", getAllInvoiceRowOFAInvoice)

router.post("/", createAInvoiceRow)

router.delete("/:invoicerowId", deleteAInvoiceRow)
router.patch("/:invoicerowId", updateAInvoiceRow)

module.exports = router