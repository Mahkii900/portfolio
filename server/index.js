require('dotenv').config()
const express = require('express')
const {SERVER_PORT} = process.env
const app = express()

app.use(express.json())

app.listen(SERVER_PORT, () => console.log(`Dowloading ${SERVER_PORT}gb of malware...`))