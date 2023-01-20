// const names = require('./1-names')
// const sayHi = require('./2-utils')
// const data = require('./3-mixture')
// require('./4-mind-graned')
// console.log(data);
// sayHi(names.jhon)

// const fs  = require('fs')

// console.log(fs);

//http module

//npm -global command , comes with  node
//npm --version

//local dependency - use it only in this particular project
//npm i <packageName>


//global dependency - use it any project 
// npm install -g <packageName>

//package.json - manifest file(stores important info about project/package)
//manual approach (create package.json in the root , create properties etc)
//npm init(step by step, press enter to skip)
//npm init-y(everything default)


const _ = require('lodash')


const items = [1,[2,[3,[4,[5,[6,[7,[8,[9]]]]]]]]]

const newItems = _.flattenDeep(items)
console.log(newItems);