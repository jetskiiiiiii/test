const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
    res.end('Hello World!')
})

server.listen(3000, () => {
    console.log('Listening on port 3000')
})