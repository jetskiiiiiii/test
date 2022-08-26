const http = require('http')
const fs = require('fs')
// const { type } = require('os')

// get files
const homePage = fs.readFileSync('./6-http-app.html')

const server = http.createServer((req,res) => {
    const url = req.url

    // home page
    switch(url) {
        case '/': 
            res.writeHead(200, { 'content-type': 'text/html'})
            res.write(homePage)
            res.end()
            break;
        case '/about':
            res.writeHead(200, { 'content-type': 'text/html'})
            res.write('<h1>ABOUT PAGE</h1>')
            res.end()
            break;
        default:
            res.writeHead(404, { 'content-type': 'text/html'})
            res.write('<h1>404 PAGE NOT FOUND</h1>')
            res.end()
            break;
    }

})

server.listen(3000)