/*
    Type Assertions :
    - Kadang, kita sering berada pada situasi dimana kita tahu tipe data yang kita gunakan, namun TypeScript tidak tahu tipe data tersebut
    - Biasanya pada kasus kita menggunakan kode dari JavaScript sehingga membuat return value nya berupa tipe data Any
    - Pada kasus ini, kita bisa melakukan konversi ke tipe data yang kita mau menggunakan kata kunci as
    - Ini disebut dengan type assertions
    - Type assertions digunakan untuk melakukan konversi tipe data
    - type assertions sebenarnya tidak aman, karena ketika salah konversi tipe data, maka akan terjadi error
*/

import { Person } from "../src/person";

describe("Interface", function () {
  it("should support type assertions", function () {
    const person: any = {
      name: "Eko",
      age: 30,
    };

    const person2: Person = person as Person;
    // person2.sayHello("Budi");

    console.info(person2);
  });
});
