const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
            process.env.DB_CONNECTION,
            { useNewUrlParser: true },
        )
        console.log(`MongoDB connected: ${conn.connection.host}`)

    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB
