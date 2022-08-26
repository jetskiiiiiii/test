const express = require('express')
const logger = require('./logger')
const app = express()

app.use(logger)

app.get('/', (req, res) => {
    res.send('Home')
})

app.listen(3000, () => {
    console.log('Server started on port 3000')
})