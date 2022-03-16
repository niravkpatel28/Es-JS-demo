function printThis() {
  console.log("This ", this);
}

const emp1 = {
  name: "Nirav",
};

// a  apply
// b  bind
// c  call
// emp1.printThis();

// let something = printThis.bind(emp1); // bind return kya karta hai
// // bind associatates a function with object and returs a function

// let somethingElse = printThis.apply(emp1);

let somethingOther = printThis.call(emp1);
