/*
    Method :
    - Selain properties, di Class juga bisa memiliki function, atau lebih sering disebut sebagai Method
    - Cara pembuatannya sebenarnya sama seperti di JavaScript, hanya saja pada TypeScript kita harus tentukan tipe data parameter dan return value nya
*/

describe("Method", () => {
  class Customer {
    readonly id: number;
    name: string = "Guest";
    age?: number;

    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
    }

    sayHello(name: string): void {
      console.info(`Hello ${name}, my name is ${this.name}`);
    }
  }

  it("should can have methods", () => {
    const customer = new Customer(1, "Eko");
    customer.sayHello("Budi");
  });
});
