/*
    Operator Instanceof :
    - Kadang ada kasus kita ingin mengecek apakah sebuah object merupakan instance dari class tertentu atau bukan
    - Kita tidak bisa menggunakan operator typeof, karena object dari class, jika kita gunakan operator typeof, hasilnya adalah “object”
    - Operator instanceof akan menghasilkan boolean, true jika benar object tersebut adalah instance object nya, atau false jika bukan
*/

describe("Instance Of", () => {
  class Employee {}
  class Manager {}

  const budi = new Employee();
  const eko = new Manager();

  it("should have problem using typeof", () => {
    console.info(typeof budi);
    console.info(typeof eko);
  });

  it("should support instanceof", () => {
    expect(budi instanceof Employee).toBe(true);
    expect(budi instanceof Manager).toBe(false);

    expect(eko instanceof Employee).toBe(false);
    expect(eko instanceof Manager).toBe(true);
  });
});
