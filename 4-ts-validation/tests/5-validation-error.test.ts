/*
    Validation Error :
    - Jika terjadi error karena data tidak valid, maka hasil zod akan melakukan throw ZodError
*/

import { z, ZodError } from "zod";

describe("validation error", () => {
  it("should return zod error if invalid", async () => {
    const schema = z.string().email().min(3).max(100);

    try {
      schema.parse("ek"); // otomatis melakaukan throw ZodError jika gagal
    } catch (err) {
      if (err instanceof ZodError) {
        console.error(err);
        // err.issues.forEach((issue) => {
        //     console.error(`Error: ${issue.message}`);
        // })
      }
    }
  });

  // opssi jika tidak nyaman menggunakan try catch
  // safeParse() akan mengembalikan object dengan property success dan data atau error
  it("should return zod error if invalid without exception", async () => {
    const schema = z.string().email().min(3).max(100);

    const result = schema.safeParse("eko@example.com");

    if (result.success) {
      console.info(result.data);
    } else {
      console.error(result.error);
    }
  });
});
