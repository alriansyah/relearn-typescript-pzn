/*
    Abstract class :
    - Abstract Class merupakan deklarasi Class yang belum selesai
    - Abstract Class membolehkan memiliki properties atau method yang abstract atau belum di buat implementasinya
    - Abstract Class juga tidak bisa dibuat menjadi object menggunakan kata kunci new
    - Kegunaan Abstract Class hanya digunakan sebagai Parent Class yang nanti diturunkan ke Child Class nya
    - properti atau method yang dideklarasikan sebagai abstract harus diimplementasikan pada Child Class nya, jika tidak maka akan terjadi error
*/

describe("Abstract Class", () => {
  abstract class Customer {
    readonly id: number;
    abstract name: string;

    constructor(id: number) {
      this.id = id;
    }

    hello() {
      console.info("Hello");
    }

    abstract sayHello(name: string): void;
  }

  class RegularCustomer extends Customer {
    name: string;

    constructor(id: number, name: string) {
      super(id);
      this.name = name;
    }

    sayHello(name: string): void {
      console.info(`Hello ${name}, my name is ${this.name}`);
    }
  }

  it("should support", () => {
    const customer1 = new RegularCustomer(1, "Eko");
    customer1.sayHello("Budi");
  });
});
