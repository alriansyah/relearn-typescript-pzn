/*
    While Loop :
    - TypeScript juga mendukung perulangan While Loop seperti di JavaScript

*/

describe("While Loop", function () {
  it("should support while loop", function () {
    let counter: number = 0;

    while (counter < 10) {
      console.info(counter);
      counter++;
    }
  });
});
