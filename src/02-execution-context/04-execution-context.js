const surname = "patel"; // global

const printName = (input) => {
  let name = "Nirav";
  // api call
  console.log("This is my name", name, Date.now());

  const displayDate = () => {
    console.log("Date ", Date.now());
  };
};

printName();
// A function always returns something
// object, value or Undefined

// EC  for printName
// VariableObject -- {
// name: "undefined";
// displayDate : fucntion
// }

const f3 = () => {};

const f2 = () => {
  f3(); //EC3
};

const f1 = () => {
  f2(); // EC2
};

f1(); // EC1
