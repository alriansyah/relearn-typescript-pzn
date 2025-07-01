/*
    Ternary Operator :
    - Ternary operator yang dilakukan di JavaScript juga bisa dilakukan di TypeScript
*/

describe("Ternary Operator", function () {
  it("should support ternary operator", function () {
    const value = 80;
    const say = value >= 75 ? "Congratulation" : "Try Again";
    console.info(say);
  });
});
