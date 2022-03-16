function printThis() {
  console.log("This===", this);
}
// parent window
const printThisES6 = () => {
  console.log("This ES6===", this);
};

class Employee {
  constructor({ name, company }) {
    this.name = name;
    this.company = company;
  }
  printThis = printThis;
  printThisES6 = printThisES6;
}

const emp1 = new Employee({ company: "Surfboard", name: "Nirav" });
emp1.printThis(); // { company: "Surfboard", name: "Nirav" }
printThis();
emp1.printThisES6(); // { company: "Surfboard", name: "Nirav" }
