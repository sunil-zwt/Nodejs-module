const EventEmitter =  require('events')

const CustomEvent = new EventEmitter()

CustomEvent.on('response',(name,id)=>{
    console.log(`data is recieves ${name} id : ${id} `);
})

CustomEvent.emit('response','sunil',07)