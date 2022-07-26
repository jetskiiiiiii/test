const fs = require('fs')

const write = async() => {
    try{
        for(let i=0; i<1000; i++){
            await fs.promises.writeFile('./subfolder/big-file.txt', `I'm ${i}\n`, {flag: 'a'})
        }
    } catch (error) {
        console.log(error)
    }
}

write()