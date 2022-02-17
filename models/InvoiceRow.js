const mongoose = require('mongoose')

const InvoiceRowSchema = new mongoose.Schema({
    invoiceId: {
        type: String,
        required: [true, 'Invoice Id is required']
    },
    item: {
        type: String,
        required: [true, "A new line must have an item or service for which buyer have to pay or already paid."],
        // maxlength: 30
    },
    quantity: {
        type: Number,
        required: [true, "Quantity or hours for item or service is required."]
    },
    rate: {
        type: Number,
        required: [true, "Rate for item or service is required."]
    }
}, { timestamps: true })

module.exports = mongoose.model("InvoiceRow", InvoiceRowSchema)