const express = require('express')
require('dotenv').config();
const server =  express();
require('./config/db')()

server.use(express.json({}))

const PORT = 3500 || process.env.PORT
server.listen(PORT, () => console.log(`Server is Running on port ${PORT}`))