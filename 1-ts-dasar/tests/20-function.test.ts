/*
    Function :
    - Sama seperti di JavaScript, TypeScript juga mendukung pembuatan function
    - Cara pembuatan function di TypeScript pun sama dengan di JavaScript
    - Salah satu yang membedakan adalah, pada parameter kita perlu menentukan tipe data, dan pada function kita juga perlu menentukan tipe data return value nya
    - Pada kasus function tersebut tidak mengembalikan value, kita bisa menggunakan tipe data void, atau tidak perlu menyebutkan sama sekali seperti di JavaScript
*/

describe("Function", function () {
  it("should support in typescript", function () {
    function sayHello(name: string): string {
      return `Hello ${name}`;
    }

    expect(sayHello("Eko")).toBe("Hello Eko");

    function printHello(name: string): void {
      console.info(`Hello ${name}`);
    }

    printHello("Eko");
  });
});
