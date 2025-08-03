/*
    Polymorphism :
    - Polymorphism berasal dari bahasa Yunani yang berarti banyak bentuk.
    - Dalam OOP, Polymorphism adalah kemampuan sebuah object berubah bentuk menjadi bentuk lain
    - Polymorphism erat hubungannya dengan Inheritance
    - Polymorphism merupakan kemampuan dimana dia bisa berubah bentuk menjadi object dari turunannya

    Method Polymorphism :
    - Saat kita membuat function / method dengan parameter, kita juga bisa mengirim data polymorphism pada parameter tersebut
    - Misal kita membuat sebuah function dengan parameter class Employee, kita bisa mengirim object dalam bentuk Employee, Manager ataupun VicePresident
    - Hal ini karena Manager dan VicePresident merupakan turunan dari Employee, sehingga kita bisa mengirim data seluruh turunan dari Employee
*/

describe("Polymorphism", () => {
  class Employee {
    constructor(public name: string) {}
  }

  class Manager extends Employee {}

  class VicePresident extends Manager {}

  function sayHello(employee: Employee): void {
    console.info(`Hello ${employee.name}`);
  }

  it("should support", () => {
    let employee: Employee = new Employee("Eko");
    console.info(employee);

    employee = new Manager("Eko");
    console.info(employee);

    employee = new VicePresident("Eko");
    console.info(employee);
  });

  it("should support method parameter polymorphism", () => {
    sayHello(new Employee("Eko"));
    sayHello(new Manager("Budi"));
    sayHello(new VicePresident("Joko"));
  });
});
