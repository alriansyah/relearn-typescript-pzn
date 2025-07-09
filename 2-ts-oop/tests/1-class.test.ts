/*
    Class :
    - Untuk membuat class di TypeScript, kita bisa menggunakan kata kunci class, sama seperti di JavaScript
    - Cara membuat Object dari Class pun cukup menggunakan kata kunci new, sama juga seperti di JavaScript
*/

describe("Class", () => {
  it("should can create class", () => {
    class Customer {}

    class Order {}

    const customer: Customer = new Customer();
    const order = new Order();
  });
});
