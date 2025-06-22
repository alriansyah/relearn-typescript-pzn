import { Category, Product } from "../src/type-alias";

/*
    Type Alias :
    - Menggunakan tipe data Any sebenarnya tidak direkomendasikan
    - Biasanya kita akan menggunakan tipe data Any, jika memang datanya kita gunakan misal dari library orang lain yang sudah tidak bisa diubah, atau memang ketika attribute nya tidak pasti datanya
    - Pada kasus jika kita membuat tipe data JavaScript object sendiri, kita bisa membuat alias untuk struktur tipe data objectnya

    Type Alias untuk Union Type :
    - Type Alias juga bisa digunakan untuk membuat union type
*/

describe("Type Alias", function () {
  it("should support in typescript", function () {
    const category: Category = {
      id: 1,
      name: "Handphone",
    };

    const product: Product = {
      id: "1",
      name: "Samsung S20",
      price: 20000000,
      category: category,
    };

    console.info(category);
    console.info(product);
  });
});
