const http = require('http')

const server = http.createServer()


server.on('response',(req,res)=>{
    res.end('welcome')
})

server.listen(5000,()=>{
    console.log('server listening 10000');
})