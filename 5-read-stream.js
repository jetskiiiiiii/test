const fs = require('fs')

const stream = fs.createReadStream('./subfolder/big-file.txt', {highWaterMark: 9000})

stream.on('data', (result) => {
    console.log(result)
})