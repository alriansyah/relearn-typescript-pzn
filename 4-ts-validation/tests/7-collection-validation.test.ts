/*
    Collection Validation :
    - Selain Object, kita juga bisa melakukan validasi untuk tipe Collection, seperti Array, Set dan Map
    - https://zod.dev/?id=arrays
    - https://zod.dev/?id=sets
    - https://zod.dev/?id=maps
*/

import { z } from "zod";

describe("collection validation", () => {
  it("should support array validation", async () => {
    const schema = z.array(z.string().email()).min(1).max(10);

    const request: Array<string> = ["eko@example.com", "budi@example.com"];
    const result: Array<string> = schema.parse(request);

    console.info(result);
  });

  it("should support set validation", async () => {
    const schema = z.set(z.string().email()).min(1).max(10);

    const request: Set<string> = new Set([
      "eko@example.com",
      "budi@example.com",
      "eko@example.com",
    ]);
    const result: Set<string> = schema.parse(request);

    console.info(result);
  });

  it("should support map validation", async () => {
    const schema = z.map(z.string(), z.string().email());

    const request: Map<string, string> = new Map([
      ["eko", "eko@example.com"],
      ["budi", "budi@example.com"],
    ]);
    const result: Map<string, string> = schema.parse(request);
    console.info(result);
  });
});
