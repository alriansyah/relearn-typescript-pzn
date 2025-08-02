/*
    Super Constructor :
    - Pada kasus pewarisan antar class, kadang di Child Class kita ingin membuat Constructor juga, baik itu sama seperti di Parent Child, ataupun berbeda
    - Pada kasus kita membuat Constructor di Child Class, maka secara otomatis kita harus memanggil Constructor di Parent Class
    - Hal ini sebenarnya sama seperti di JavaScript
    - Kita bisa menggunakan kata kunci super untuk memanggil Constructor di Parent Class
*/

describe("Super Constructor", () => {
  class Person {
    name: string;

    constructor(name: string) {
      this.name = name;
    }
  }

  class Employee extends Person {
    department: string;

    constructor(name: string, department: string) {
      super(name);
      this.department = department;
    }
  }

  it("should support", () => {
    const employee = new Employee("Eko", "Tech");
    console.info(employee.name);
    console.info(employee.department);
  });
});
