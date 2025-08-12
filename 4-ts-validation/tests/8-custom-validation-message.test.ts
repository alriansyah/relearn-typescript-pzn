/*
    Custom Validation Message :
    - Saat kita menggunakan Zod, secara default sudah terdapat message error
    - Namun, jika kita ingin ubah message errornya, kita bisa ubah ketika menggunakan method di schema
*/

import { z } from "zod";

describe("custom validation message", () => {
  it("should can validate object with message", async () => {
    const loginSchema = z.object({
      username: z.string().email("username harus email"),
      password: z
        .string()
        .min(6, "password min harus 6 karakter")
        .max(20, "password max harus 20 karakter"),
    });

    const request = {
      username: "eko",
      password: "12",
    };

    try {
      const result = loginSchema.parse(request);
      console.info(result);
    } catch (err) {
      console.error(err);
    }
  });
});
