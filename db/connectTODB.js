const mongoose = require("mongoose")

const connectTODB = async (passedUrl) => {
    try {
        await mongoose.connect(passedUrl)
        console.log("App is connected to DB")
    } catch (err) {
        console.log(err)
    }
}

module.exports = { connectTODB }