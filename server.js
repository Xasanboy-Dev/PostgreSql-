const { application } = require("express")
const express = require("express")
const server = express()
require("dotenv").config()
server.use(express.json())
// Initial routes
server.use('/api', require("./routes"))
const PORT = process.env.PORT || 1234
server.listen(PORT, () => {
    console.log(`Server: http://localhost:${PORT}`)
})