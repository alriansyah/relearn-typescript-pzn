/*
    If Statement :
    - Sama seperti di JavaScript, di TypeScript juga kita bisa melakukan if statement
    - If statement di TypeScript sama seperti If statement di JavaScript
*/

describe("If Statement", function () {
  it("should support in typescript", function () {
    const examValue = 90;

    if (examValue > 80) {
      console.info("Good");
    } else if (examValue > 60) {
      console.info("Not Bad");
    } else {
      console.info("Try Again");
    }
  });
});
