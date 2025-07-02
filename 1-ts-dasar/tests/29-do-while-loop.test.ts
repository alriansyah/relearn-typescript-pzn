/*
    Do While Loop :
    - TypeScript juga mendukung perulangan menggunakan Do While Loop
*/

describe("Do While Loop", function () {
  it("should support do while loop", function () {
    let counter: number = 0;

    do {
      console.info(counter);
      counter++;
    } while (counter < 10);
  });
});
