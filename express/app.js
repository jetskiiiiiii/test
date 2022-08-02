const express = require('express')
const path = require('path')

const app = express()

// setup static and middleware
app.use(express.static('./public'))

app.get('*', (req, res) => {
    res.status(404).send('404 PAGE NOT FOUND')
})

app.listen(3000, () => {
    console.log('Server started on port 3000')
})