/*
    Function Interface :
    - Di TypeScript, kita juga bisa membuat deklarasi Function dalam bentuk Interface
    - Dengan demikian ketika kita ingin membuat variabel yang berisi function, kita bisa dengan mudah menggunakan interface tersebut
*/

describe("Interface", function () {
  it("should support function interface", function () {
    interface AddFunction {
      (value1: number, value2: number): number;
    }

    const add: AddFunction = (value1, value2) => {
      return value1 + value2;
    };

    expect(add(2, 2)).toBe(4);
  });
});
