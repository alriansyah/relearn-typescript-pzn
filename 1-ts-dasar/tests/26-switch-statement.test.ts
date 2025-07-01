/*
    Switch Statement :
    - Switch statement di TypeScript juga sama seperti di JavaScript
*/

describe("Switch Statement", function () {
  it("should support switch statement", function () {
    function sayHello(name: string): string {
      switch (name) {
        case "Eko":
          return "Hi Eko";
        case "Budi":
          return "Hi Budi";
        default:
          return "Hello";
      }
    }

    console.info(sayHello("Eko"));
    console.info(sayHello("Budi"));
    console.info(sayHello("Joko"));
  });
});
