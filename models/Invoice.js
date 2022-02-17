const mongoose = require('mongoose')

const InvoiceSchema = new mongoose.Schema({
    note: {
        type: String,
        default: " "
    },
    status: {
        type: String,
        enum: {
            values: ["paid", "outstanding", "late", "pending"],
            message: "{VALUE} is not a valid input"
        },
        required: [true, 'Status is a required field , valid inputs : [paid , outstanding , late , pending].']
    },
    duedate: {
        type: Date,
        default: new Date()
    }
}, { timestamps: true })

module.exports = mongoose.model("Invoice", InvoiceSchema)