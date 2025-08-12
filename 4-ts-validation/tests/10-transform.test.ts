/*
    Transform :
    - Saat membuat schema, terdapat function bernama transform yang bisa kita gunakan untuk melakukan transformasi data setelah proses parse selesai
*/

import { z } from "zod";

describe("Transform", () => {
  it("should support transform", async () => {
    const schema = z.string().transform((data) => {
      return data.toUpperCase().trim();
    });

    const result = schema.parse("     khannedy     ");
    console.info(result);
  });
});
