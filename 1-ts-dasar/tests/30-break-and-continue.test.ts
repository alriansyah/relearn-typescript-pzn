/*
    Break And Continue :
    - Seperti di JavaScript, pada perulangan While atau Do While, kita sering menggunakan kata kunci break dan continue
    - Hal ini juga bisa dilakukan di TypeScript
*/

describe("Break And Continue", function () {
  it("should support break and continue", function () {
    let counter: number = 0;

    do {
      counter++;

      if (counter == 10) {
        break;
      }

      if (counter % 2 == 0) {
        continue;
      }

      console.info(counter);
    } while (true);
  });
});
