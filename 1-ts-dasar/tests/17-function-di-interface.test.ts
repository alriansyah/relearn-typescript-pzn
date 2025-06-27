/*
    Function di Interface :
    - Implementasi dari Interface di JavaScript sebenarnya adalah sebuah object
    - Seperti yang kita tahu, di JavaScript, kita bisa menambahkan function sebagai attribute di object
    - Hal ini juga bisa kita lakukan di Interface
*/

import { Person } from "../src/person";

describe("Interface", function () {
  it("should support function in interface", function () {
    const person: Person = {
      name: "Eko",
      sayHello: function (name: string): string {
        return `Hello ${name}, my name is ${this.name}`;
      },
    };

    console.info(person.sayHello("Budi"));
  });
});
