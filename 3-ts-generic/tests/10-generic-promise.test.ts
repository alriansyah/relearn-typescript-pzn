/*
    Generic Promise :
    - Saat kita menggunakan JavaScript Async, kita akan sering bertemu dengan Promise
    - TypeScript menggunakan Generic sebagai representasi untuk tipe data Promise<T>
    - Oleh karena itu, ketika membuat function yang mengembalikan Promise, kita bisa menentukan tipe data apa yang akan dikembalikan oleh Promise tersebut
*/

describe("generic promise", () => {
  async function fetchData(value: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        if (value === "Eko") {
          resolve("Hello " + value);
        } else {
          reject("Not Found");
        }
      }, 1000);
    });
  }

  it("should support promise", async () => {
    const result = await fetchData("Eko");
    expect(result.toUpperCase()).toBe("HELLO EKO");

    try {
      await fetchData("Budi");
    } catch (e) {
      expect(e).toBe("Not Found");
    }
  });
});
