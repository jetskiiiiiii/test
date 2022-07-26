/* https://www.youtube.com/watch?v=Oe421EPjeBE&t=5252s 
https://docs.google.com/document/d/19fGyUi0VeYR5crENZhuMEAVtIhImWeMqzZbKn-LGStA/edit
web dev w/ node: page 60 */

const fs = require('fs')
// const util = require('util')

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         fs.readFile(path, 'utf-8', (err, data) => {
//             if(err) {
//                 reject(err)
//             }
//             else {
//                 resolve(data)
//             }
//         })
//     })
// }
                    
// const readFilePromise = util.promisify(fs.readFile)
// const writeFilePromise = util.promisify(fs.writeFile)
                    
// getText('./subfolder/test/write.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))

const start = async() => {
    try {
        const first = await fs.promises.readFile('./subfolder/write.txt', 'utf-8')
        const second = await fs.promises.readFile('./subfolder/write2.txt', 'utf-8')
        await fs.promises.writeFile('./subfolder/write.txt', 'test', {flag: 'a'})
        console.log(first, second)
    } catch (error) {
        console.log(error)
    }
}

start()