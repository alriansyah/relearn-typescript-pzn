/*
    Method Overriding:
    - Saat kita membuat Child Class, kita bisa mendeklarasikan ulang Method yang terdapat di Parent Class
    - Jika semua deklarasi Method sama, maka itu adalah Method Overriding
    - Pada kasus tertentu, kadang kita sering melakukan hal ini
*/

describe("Method Overriding", () => {
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
    // mendeklari ulang method sayHello / sama saja mengoverride method sayHello dari parent class
    sayHello(name: string): void {
      console.info(`Hello ${name}, my name is ${this.name}, I am your Manager`);
    }
  }

  it("should support", () => {
    const employee = new Employee("Eko");
    employee.sayHello("Budi");

    const manager = new Manager("Eko");
    manager.sayHello("Budi");
  });
});
