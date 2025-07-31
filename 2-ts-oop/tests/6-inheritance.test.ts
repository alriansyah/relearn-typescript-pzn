/*
    Inheritance :
    - Sama seperti di JavaScript, di TypeScript juga mendukung pewarisan antar Class menggunakan kata kunci extends
    - Secara otomatis semua properties dan method yang ada di Parent Class akan diwariskan ke Child Class
    - Pewarisan di TypeScript sama seperti di JavaScript, hanya bisa memiliki satu Parent Class
    - Namun satu Parent Class, bisa memiliki banyak sekali Child Class
*/

describe("Inheritance", () => {
  // parent class
  class Employee {
    name: string;

    constructor(name: string) {
      this.name = name;
    }
  }

  class Manager extends Employee {}

  class Director extends Manager {}

  it("should support", () => {
    const employee = new Employee("Eko");
    console.info(employee.name);

    const manager = new Manager("Budi");
    console.info(manager.name);

    const director = new Director("Joko");
    console.info(director.name);
  });
});
