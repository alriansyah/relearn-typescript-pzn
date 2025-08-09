/*
    Optional Generic Type :
    - Saat kita menggunakan generic type di Class, lalu kita menggunakan generic type tersebut di constructor, kita tidak wajib menyebutkan tipe generic nya
    - TypeScript bisa secara otomatis mendeteksi tipe yang kita gunakan pada parameter constructor
    - Namun jika kita tidak menggunakan tipe tersebut pada constructor, maka typescript tidak bisa menggunakan secara otomatis
*/

describe("optional generic type", () => {
  class Entry<K, V> {
    constructor(public key: K, public value: V) {}
  }

  it("should support optional generic type", async () => {
    const entry = new Entry(1, "Hello"); // mendeteksi otomatis, K: number, V: string
    expect(entry.key).toBe(1);
    expect(entry.value).toBe("Hello");
  });

  class SimpleGeneric<T> {
    private value?: T;

    setValue(value: T) {
      this.value = value;
    }

    getValue(): T | undefined {
      return this.value;
    }
  }

  it("should create simple generic", async () => {
    const simple = new SimpleGeneric<string>();
    simple.setValue("Eko");
    // simple.setValue(100);
    // simple.setValue(true);

    expect(simple.getValue()!.toUpperCase()).toBe("Eko");
  });
});
