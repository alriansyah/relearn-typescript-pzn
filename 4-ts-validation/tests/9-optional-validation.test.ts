/*
    Optional Validation :
    - Secara default, saat membuat schema, data akan selalu wajib diisi
    - Namun kadang mungkin kita butuh data yang tidak wajib, atau optional
    - Kita bisa menggunakan optional() method pada schema, untuk menjadikan bahwa field tersebut tidak wajib
*/

import { z } from "zod";

describe("optional validation", () => {
  it("should can support optional validation", async () => {
    const registerSchema = z.object({
      username: z.string().email(),
      password: z.string().min(6).max(20),
      firstName: z.string().min(3).max(100),
      lastName: z.string().min(3).max(100).optional(),
    });

    const request = {
      username: "eko@example.com",
      password: "rahasia",
      firstName: "Eko",
    };

    const result = registerSchema.parse(request);
    console.info(result);
  });
});
