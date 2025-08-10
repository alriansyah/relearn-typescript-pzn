/*
    Generic Constraint :
    - Secara default, saat menggunakan generic type, kita bisa bebas menggunakan tipe data apapun
    - Namun, kadang kita ingin membatasi jenis tipe data yang diperbolehkan
    - Kita bisa menggunakan perintah extends TipeData pada operator <>, yang artinya tipe data yang boleh digunakan hanyalah tipe data TipeData dan turunannya
*/

describe("generic constraint", () => {
  interface Employee {
    id: string;
    name: string;
  }

  interface Manager extends Employee {
    totalEmployee: number;
  }

  interface VP extends Manager {
    totalManager: number;
  }

  class EmployeeData<T extends Employee> {
    constructor(public employee: T) {}
  }

  it("should support constraint", async () => {
    const data1 = new EmployeeData<Employee>({
      id: "100",
      name: "Eko",
    });
    const data2 = new EmployeeData<Manager>({
      id: "100",
      name: "Eko",
      totalEmployee: 100,
    });
    const data3 = new EmployeeData<VP>({
      id: "100",
      name: "Eko",
      totalEmployee: 100,
      totalManager: 10,
    });

    // const data4 = new EmployeeData<string>("Eko"); // error
    // const data4 = new EmployeeData<number>(100); // error
  });
});
