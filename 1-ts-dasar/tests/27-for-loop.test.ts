/*
    For Loop :
    - Perulangan For di TypeScript sama saja seperti perulangan For di JavaScript
    - TypeScript mendukung semua for loop seperti for loop biasa, for in, dan for of
*/

describe("For Loop", function () {
  it("should support for loop", function () {
    const names: string[] = ["Eko", "Kurniawan", "Khannedy"];

    for (let i = 0; i < names.length; i++) {
      console.info(names[i]);
    }

    for (const name of names) {
      console.info(name);
    }

    for (const index in names) {
      console.info(names[index]);
    }
  });
});
