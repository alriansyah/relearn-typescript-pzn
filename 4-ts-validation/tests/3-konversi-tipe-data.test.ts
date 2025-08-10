/*
    Konversi Tipe Data :
    - Saat kita membuat schema untuk tipe data seperti string, number dan boolean, kita harus melakukan parse() menggunakan tipe yang sama
    - Kadang-kadang, input dari pengguna bisa menggunakan tipe data berbeda, contoh input number berupa string “1234”, input boolean berupa string “true”
    - Zod memiliki object bernama coerce yang bisa digunakan untuk melakukan konversi tipe data secara otomatis
    - coerce ini terbatas pada tipe data string, number, dan boolean saja dalam konversi tipe data
*/

import { z } from "zod";

describe("konversi tipe data", () => {
  it("should support data conversion", async () => {
    const usernameSchema = z.coerce.string().min(3).max(100); // otomatis mengkonversi tipe data ke string
    const isAdminSchema = z.coerce.boolean(); // otomatis mengkonversi tipe data ke boolean
    const priceSchema = z.coerce.number().min(1000).max(1000000); // otomatis mengkonversi tipe data ke number

    const username = usernameSchema.parse(12345);
    console.info(username);

    const isAdmin = isAdminSchema.parse("true");
    console.info(isAdmin);

    const price = priceSchema.parse("10000");
    console.info(price);
  });
});
