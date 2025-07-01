/*
    Function Overloading :
    - Function Overloading adalah kemampuan untuk membuat Function dengan nama yang sama, namun dengan parameter input yang berbeda
    - Di JavaScript, membuat satu Function dengan input data yang berbeda dan output yang bisa menghasil data yang berbeda sudah biasa dilakukan
    - Namun hal ini kadang bisa membuat sebuah Function tidak aman, karena bisa menghasilkan berbeda-beda tipe data.
    - TypeScript memberikan kemampuan Function Overloading, agar pembuatan Function seperti ini lebih aman dilakukan
*/

describe("Function Overloading", function () {
  it("should support function overloading", function () {
    function callMe(value: number): number; // template
    function callMe(value: string): string; // template
    function callMe(value: any): any { // implementation
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value * 10;
      }
    }

    console.log(callMe("Eko"));
    console.log(callMe(10));
    

    expect(callMe(10)).toBe(100);
    expect(callMe("Eko")).toBe("EKO");
  });
});
