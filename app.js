// const names = require('./1-names')
// const sayHi = require('./2-utils')
// const data = require('./3-mixture')
// require('./4-mind-graned')
// console.log(data);
// sayHi(names.jhon)

// const fs  = require('fs')

// console.log(fs);

//http module

// const {createReadStream} = require('fs')

const http = require('http')

const fs = require('fs')

http.createServer((req,res)=>{
    // const text = fs.readFileSync('./content/big.txt','utf-8')
    // res.end(text)
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
    fileStream.on('open', () => {
      fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
      res.end(err)
    })
}).listen(5000)