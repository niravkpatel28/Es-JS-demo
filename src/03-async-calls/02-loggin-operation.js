const fs = require("fs");

fs.readFile("./file1.txt", "utf-8", (err, data) => {
  // 1. Read from file1.txt
  if (err) {
    console.log("Error in readin file");
    return;
  }
  // write into file 2
  fs.writeFile("./file2.txt", data, (err) => {
    if (err) {
      fs.writeFile(
        "./logs.txt",
        JSON.stringify({ time: Date.now(), status: err }),
        (err) => {
          if (err) {
            console.log("Error in logss");
          }
        },
      );
      return;
    }
    fs.writeFile("./logs.txt", data, (err) => {
      if (err) {
        console.log("Errror in log operation");
        return;
      }
      console.log("Logs updated succcessfully");
    });
  });
});
