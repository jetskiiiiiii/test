const EventEmitter = require('events')

const newEmitter = new EventEmitter()

newEmitter.on('response', (label, age) => {
    console.log(`${label} is ${age}`)
})

newEmitter.emit('response', 'bro', 3)