const fs = require("fs");
const path = require("path");

// Create a promise
// reads data from file1.txt and returns file data
// const readFilePromise = new Promise((resolve, reject) => {
//   fs.readFile("./file1.txt", "utf-8", (err, data) => {
//     if (err) {
//       reject({
//         message: "Error in reading file",
//         error: err,
//       });
//       return;
//     }
//     resolve({
//       message: "Data read successfully",
//       data: data,
//     });
//   });
// });

// returns a promise
const readFilePromise = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf-8", (err, data) => {
      if (err) {
        reject({
          message: "Error in reading file",
          error: err,
        });
        return;
      }
      resolve({
        message: "Data read successfully",
        data: data,
      });
    });
  });
};

// readFilePromise -- value --function reference
// readFilePromise() -- value Promise

//consuming a promise

// readFilePromise("./file1.txt")
//   .then((data) => {
//     console.log("Data", data);
//   })
//   .catch((err) => {
//     console.log("Error", err);
//   });

const writeFilePromise = (fileName, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, (error) => {
      if (error) {
        reject({
          message: "Error in writing file",
          error: error,
        });
        return;
      }
      resolve({
        message: "File written Successfully",
      });
    });
  });
};

writeFilePromise("file2.txt", "Write using promise")
  .then((status) => {
    console.log(status);
  })
  .catch((error) => {
    console.log(error);
  });

// file1 -- read -- file 2 data write using custom functions
