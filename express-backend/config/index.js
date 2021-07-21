require("dotenv").config()

const config = {
    uploadDestination: process.env.UPLOAD_DEST || './uploads',
}

module.exports = config