const { readFile, writeFile } = require("fs").promises;
// const util = require('util')

// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)
// const getPath = (path) => {
//   return new Promise((reject, resolve) => {
//     readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };
// // getPath('./content/first.txt').then(data=> console.log(data)).catch(err=> console.log(err))

const start = async () => {
  try {
    // const first = await readFilePromise("./content/first.txt",'utf-8');
    // const second = await readFilePromise("./content/second.txt",'utf-8');
    const first = await readFile("../content/first.txt",'utf-8');
    const second = await readFile("../content/second.txt",'utf-8');
    await writeFile('./content/result-mindgrained.txt',`this is the result :${first},${second}`)
    console.log(first);
    console.log(second);
  } catch (e) {
    console.log(e);
  }
};
start()
