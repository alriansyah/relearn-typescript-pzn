/*
    Interface :
    - Interface adalah cara lain melakukan deklarasi data selain menggunakan Type
    - Lantas kalo begitu, apa bedanya Interface dan Type?
    - Interface bisa dikembangkan dengan mudah dibanding dengan Type
    - Oleh karena itu, kebanyakan untuk tipe data yang kompleks, kebanyakan programmer TypeScript akan menggunakan Interface dibandingkan menggunakan Type

    Readonly Properties :
    - Properties dapat kita jadikan readonly, yang artinya tidak bisa diubah lagi
    - Kita bisa menggunakan kata kunci readonly pada attribute tersebut
*/

import { Seller } from "../src/seller";

describe("Interface", function () {
  it("should support in typescript", function () {
    const seller: Seller = {
      id: 1,
      name: "Toko ABC",
      nib: "12312321",
      npwp: "23123123",
    };

    seller.name = "Toko Eko";

    console.info(seller);
  });
});
