const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.status(200).send('./index.html')
})

app.get('/about', (req, res) => {
    res.status(200).send('ABOUT')
})

app.all('*', (req, res) => {
    res.status(404).send('404 PAGE NOT FOUND')
})

app.listen(3000, () => {
    console.log('Server started on port 3000')
})