const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    const readStream = fs.createReadStream('./subfolder/big-file.txt', 'utf-8')
    
    readStream.on('open', () => {
        readStream.pipe(res)
    })

    readStream.on('error', (err) => {
        res.end(err)
    })
})

server.listen(3000)