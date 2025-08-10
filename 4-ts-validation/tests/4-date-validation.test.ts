/*
    Date Validation :
    - Zod juga bisa digunakan untuk melakukan validasi tipe data Date
    - https://zod.dev/?id=dates
*/

import { z } from "zod";

describe("date validation", () => {
  it("should support date validation", async () => {
    const birthDateSchema = z.coerce
      .date()
      .min(new Date(1980, 0, 1))
      .max(new Date(2025, 0, 1));

    const birthDate = birthDateSchema.parse("1990-01-01");
    console.info(birthDate);

    const birthDate2 = birthDateSchema.parse(new Date(1990, 0, 1));
    console.info(birthDate2);
  });
});
