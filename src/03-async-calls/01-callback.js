const fs = require("fs");

const callBack = (err, data) => {
  if (err) {
    console.log("Error in reading the file", err);
    return;
  }
  console.log("Data ", data);
};

fs.readFile("./test.txt", "utf-8", callBack);
console.log("This line is written after read file operation");

// expected
// Data Read from file test.txt
// This line is written after read file operation

// 1. fs.readFile is asycn ==> bhai file read kar and hone par callBack execute kar dena
// 2. tab tak main 12 line ka console print kar deta hu

// Task
// 1. Read data from file.txt
// 2. write the same data into file2.txt

// WHat is a callback ?
//0. Callback is a simple function
//1. Function passed as an argument
// 2. Invoked upon completion of an action
// 3. Used in asynchronous calls
