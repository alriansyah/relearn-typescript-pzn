/*
    Constructor :
    - Constructor adalah method atau function yang dipanggil ketika pertama kali object dibuat dari class
    - Constructor sama seperti Function biasanya, bisa memiliki parameter, yang membedakan adalah pada constructor, kita tidak perlu mengembalikan value
*/

describe("Class", () => {
  class Customer {
    constructor() {
      console.info("Create new customer");
    }
  }

  class Order {}

  it("should can create class", () => {
    const customer: Customer = new Customer();
    const order = new Order();
  });

  it("should can create constructors", () => {
    new Customer();
    new Customer();
  });
});
