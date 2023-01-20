
//this the async fs operation
// async means non-blocking operation ,in other word asynchronous
const { readFile, writeFile } = require("fs");
console.log("Start");
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    return;
  }
//   console.log(result);
const first = result
  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      return;
    }
    const second = result
    writeFile('./content/result-async.txt',`Here is result:${first},${second}`,(err,result)=>{
        if (err) {
            return;
          }
        //   console.log(result);
          console.log('Done with this task');
    
      })
  });

 
});

console.log("Jump to the next task");
//<Buffer 48 65 6c 6c 6f 20 74 68 69 73 20 69 73 20 66 69 72 73 74 20 74 65 78 74 20 66 69 6c 65>
// withoout passing utf8 in a second parameter in readfile
