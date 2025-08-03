/*
    Type Cast :
    - Di TypeScript dasar, kita pernah belajar tentang type assertions, dimana kita bisa mengubah tipe data dari satu tipe data ke tipe data lainnya yang lebih specific atau detail
    - Ini juga bisa kita lakukan pada kasus Method Polymorphism
    - Kita bisa kombinasikan operator instanceof dan type assertions

    Perlu Diingat :
    - Saat melakukan Type Cast, pastikan posisi Child paling bawah dilakukan pengecekan di awal
    - Hal ini agar tidak terjadi kesalahan konversi
    - Contoh, jika kita ubah posisi pengecekan instanceof Manager dan VicePresident, maka ketika kita mengirim VicePresident, dia akan berhenti di Manager, hal ini karena hasil instanceof bernilai true, karena VicePresident adalah turunan dari Manager
*/

describe("Polymorphism", () => {
  class Employee {
    constructor(public name: string) {}
  }

  class Manager extends Employee {}

  class VicePresident extends Manager {}

  function sayHello(employee: Employee): void {
    if (employee instanceof VicePresident) {
      const vp = employee as VicePresident;
      console.info(`Hello VP ${vp.name}`);
    } else if (employee instanceof Manager) {
      const manager = employee as Manager;
      console.info(`Hello manager ${manager.name}`);
    } else {
      console.info(`Hello employee ${employee.name}`);
    }
  }

  // Contoh type casting yang salah.
  // Perlu diingat: saat menggunakan instanceof, yang dicek bukan hanya apakah objek itu dibuat langsung dari kelas tertentu,
  // tapi juga apakah objek tersebut merupakan turunan (subclass) dari kelas itu.
  // Jadi instanceof juga akan bernilai true untuk objek dari kelas parent, jika objek tersebut merupakan turunan dari kelas itu.
  // Oleh karena itu, jika kita melakukan pengecekan instanceof, disarankan untuk melakukan pengecekan terlebih dahulu dari VicePresident,
  // Karena VicePresident adalah turunan posisi Child paling bawah.
  function sayHelloWrong(employee: Employee): void {
    if (employee instanceof Manager) {
      const manager = employee as Manager;
      console.info(`Hello manager ${manager.name}`);
    } else if (employee instanceof VicePresident) {
      const vp = employee as VicePresident;
      console.info(`Hello VP ${vp.name}`);
    } else {
      console.info(`Hello employee ${employee.name}`);
    }
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

  it("should support method parameter polymorphism wrong", () => {
    sayHelloWrong(new Employee("Eko"));
    sayHelloWrong(new Manager("Budi"));
    sayHelloWrong(new VicePresident("Joko"));
  });
});
