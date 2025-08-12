/*
    Custom Validation :
    - Saat menggunakan transform(), kita bisa menambahkan parameter kedua yaitu RefinementCtx, dimana bisa kita gunakan untuk menambahkan issue jika terjadi masalah
    - Hal ini bisa digunakan sebagai custom validation
*/

import { z, RefinementCtx } from "zod";

describe("custom validation", () => {
  function mustUpperCase(data: string, ctx: RefinementCtx): string {
    if (data != data.toUpperCase()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "username harus uppercase",
      });
      return z.NEVER;
    } else {
      return data;
    }
  }

  it("should can use custom validation", async () => {
    const loginSchema = z.object({
      username: z.string().email().transform(mustUpperCase),
      password: z.string().min(6).max(20),
    });

    const request = {
      username: "EKO@EXAMPLE.COM",
      password: "rahasia",
    };
    const result = loginSchema.parse(request);
    console.info(result);
  });
});
