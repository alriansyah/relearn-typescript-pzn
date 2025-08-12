/*
    Object Validation :
    - Saat kita membuat aplikasi, kita sering sekali membuat JavaScript Object
    - Untungnya Zod juga bisa digunakan untuk melakukan validasi JS Object, sehingga mempermudah kita untuk melakukan sekaligus ke semua field di JS Object
    - https://zod.dev/?id=objects

    Nested Object :
    - Zod juga bisa digunakan untuk memvalidasi nested object
    - Saat kita ingin memvalidasi nested object, kita harus tentukan object schema nya juga
*/

import { z } from "zod";

describe("object validation", () => {
  it("should can validate object", async () => {
    const loginSchema = z.object({
      username: z.string().email(),
      password: z.string().min(6).max(20),
    });

    const request = {
      username: "eko@test.com",
      password: "rahasia",
      ignore: "ignore", // ini di ignore karena tidak ada di schema
      name: "Eko Kurniawan", // ini di ignore karena tidak ada di schema
    };

    const result = loginSchema.parse(request);
    console.info(result);
  });

  it("should support nested object", async () => {
    const createUserSchema = z.object({
      id: z.string().max(100),
      name: z.string().max(100),
      address: z.object({
        street: z.string().max(100),
        city: z.string().max(100),
        zip: z.string().max(10),
        country: z.string().max(100),
      }),
    });

    const request = {
      id: "123",
      name: "Eko",
      address: {
        street: "Jalan Belum Jadi",
        city: "Jakarta",
        zip: "12323",
        country: "Indonesia",
      },
    };

    const result = createUserSchema.parse(request);
    console.info(result);
  });
});
