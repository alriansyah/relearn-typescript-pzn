/*
    Intersection Types :
    - Intersection merupakan cara membuat tipe data baru dengan cara menggabungkan dua tipe data lain
    - Hal ini sangat cocok ketika kita tidak bisa melakukan extends pada Interface
    - Misal interface dibuat oleh library/package orang lain, dimana kita tidak bisa mengubahnya, nah kita bisa membuat sebuah tipe baru dimana itu adalah gabungan dua interface
    - Kita bisa membuat type dengan menggunakan kata kunci & (dan)
*/

describe("Interface", function () {
  it("should support intersection types", function () {
    interface HasName {
      name: string;
    }

    interface HasId {
      id: string;
    }

    // interface Person extends HasName, HasId {} // Ini juga bisa

    type Domain = HasId & HasName;

    const domain: Domain = {
      id: "1",
      name: "Eko",
    };

    console.info(domain);
  });
});
