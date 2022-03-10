// if it is even .. double the money-- success / resolve
// if it is odd -- take all money and run -- failure / reject
const doubleMoney = new Promise((resolve, reject) => {
  if (Date.now() % 2 === 0) {
    reject"2000");
  } else {
    resolve("0 ");
  }
});

// console.log(doubleMoney);

doubleMoney
  .then((data) => {
    console.log("Data", data);
  })
  .catch((err) => {
    console.log("Error", err);
  });


