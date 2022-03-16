console.log("this", this);

class Employee {
  constructor({ name, company }) {
    this.name = name;
    this.company = company;
  }
  printThis() {
    console.log("This inside a function", this);
  }

  printThisES6 = () => {
    console.log("This inside an ES6 function", this);
  };
}

const emp1 = new Employee({ company: "Surfboard", name: "Nirav" });
emp1.printThis();
emp1.printThisES6();

const printThisES6 = emp1.printThisES6;
printThisES6();
