require('dotenv').config()
const express = require('express')
const {SERVER_PORT} = process.env
const app = express()
const msgCtrl = require('./controllers/messageController')

app.use(express.json())

app.post('/messages', msgCtrl.sendEmail)

app.listen(SERVER_PORT, () => console.log(`Dowloading ${SERVER_PORT}gb of malware...`))