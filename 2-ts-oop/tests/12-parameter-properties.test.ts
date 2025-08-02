/*
    Parameter Properties :
    - Kadang, seringnya kita selalu membuat parameter di Constructor yang hanya digunakan sebagai nilai untuk properties
    - Pada kasus seperti ini, kita bisa menggunakan Parameter Properties, yang secara otomatis parameter di Constructor akan dijadikan sebagai Properties di Class nya
    - Untuk membuat Parameter Properties, kita bisa langsung menambahkan visibility pada parameter di Constructor
    - Semua properties yang ada visibilitynya, akan secara otomatis menjadi properties di Class nya
*/

describe("Parameter Properties", () => {
  class Person {
    constructor(public name: string) {}
  }

  it("should support", () => {
    const person = new Person("Eko");
    console.info(person.name);

    person.name = "Budi";
    console.info(person.name);
  });
});
