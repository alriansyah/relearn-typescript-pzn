/*
    Tipe Data Enum :
    - TypeScript memiliki tipe data enum, yaitu tipe data yang nilainya sudah pasti
    - Tipe data ini tidak dimiliki di JavaScript
    - Secara default tipe data enum ini akan dikonversi menjadi string di JavasScript, namun bisa juga dikonversi menjadi number

    Enum di TypeScript :
    - Secara default, enum di TypeScript akan dikonversi menjadi tipe data number
    - Kadang kita ingin ubah dari number menjadi String, kita bisa lakukan hal itu ketika membuat enum nya
*/

import { Customer, CustomerType } from "../src/enum";

describe("Enum", function () {
  it("should support in typescript", function () {
    const customer: Customer = {
      id: 1,
      name: "Eko",
      type: CustomerType.GOLD,
    };

    console.info(customer);
  });
});
