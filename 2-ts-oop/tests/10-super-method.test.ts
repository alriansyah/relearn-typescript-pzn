/*
    Super Method :
    - Sama seperti Constructor, saat kita membuat Method Overriding, kita juga bisa memanggil Method yang sama yang terdapat di Parent Class dengan menggunakan kata kunci super, lalu diikuti dengan Method yang ingin kita panggil
*/

describe("Super Method", () => {
  class Employee {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    sayHello(name: string): void {
      console.info(`Hello ${name}, my name is ${this.name}`);
    }
  }

  class Manager extends Employee {
    sayHello(name: string): void {
      super.sayHello(name); // memanggil method sayHello dari parent class
      console.info(`And, I am your manager`);
    }
  }

  it("should support", () => {
    const employee = new Employee("Eko");
    employee.sayHello("Budi");

    const manager = new Manager("Eko");
    manager.sayHello("Budi");
  });
});
