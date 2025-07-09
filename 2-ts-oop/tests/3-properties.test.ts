/*
    Properties :
    - Properties atau Fields adalah atribut yang dimiliki oleh Class
    - Pada JavaScript, kita bisa langsung saja membuat atribut tanpa harus mendeklarasikan atribut nya
    - Di TypeScript, kita perlu mendeklarasikan properties nya terlebih dahulu, beserta dengan tipe data nya
    - Sama seperti ketika membuat attribute di Type atau Interface, kita juga bisa menjadikan properties sebagai optional, mandatory atau readonly
    - Properties yang mandatory, wajib ditambahkan nilainya di Constructor

    Properties Default Value :
    - Properties juga bisa memiliki default value, kita bisa tambahkan menggunakan operator = (sama dengan) pada properties yang ingin kita tambahkan default value nya
*/

describe("Properties", () => {
  class Customer {
    readonly id: number;
    name: string = "Guest";
    age?: number;

    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
    }
  }

  it("should can have properties", () => {
    const customer = new Customer(1, "Jonh");
    customer.age = 20;

    console.info(customer.id);
    console.info(customer.name);
    console.info(customer.age);
    console.info(customer);
  });
});
