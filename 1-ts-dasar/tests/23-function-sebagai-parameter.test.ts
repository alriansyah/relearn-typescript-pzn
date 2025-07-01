/*
    Function Sebagai Parameter :
    - Sama seperti di JavaScript, di TypeScript juga kita bisa gunakan Function sebagai parameter
    - Hal ini sudah sering kita lakukan, biasanya ketika memanggil function yang membutuhkan callback function lainnya
    - Pada TypeScript parameter yang berupa function, perlu kita beri tahu bahwa parameter tersebut adalah function
    - Kita bisa gunakan Function Interface, atau bisa langsung sebutkan pada parameter nya, jumlah parameter dan return value function yang dibutuhkan
*/

describe("Function Sebagai Parameter", function () {
  it("should function as parameter", function () {
    function sayHello(name: string, filter: (name: string) => string): string {
      return `Hello ${filter(name)}`;
    }

    function toUpper(name: string): string {
      return name.toUpperCase();
    }

    expect(sayHello("Eko", toUpper)).toBe("Hello EKO");

    // mengirim function as parameter dalam bentuk anonymous function
    expect(
      sayHello("Eko", function (name: string): string {
        return name.toUpperCase();
      })
    ).toBe("Hello EKO");

    // mengirim function as parameter dalam bentuk arrow function
    expect(sayHello("Eko", (name: string): string => name.toUpperCase())).toBe(
      "Hello EKO"
    );
  });
});
