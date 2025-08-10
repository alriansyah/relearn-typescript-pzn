/*
    Generic Parameter Default :
    - Saat kita menggunakan generic data type, kita bisa menentukan tipe data default jika tidak menyebutkan tipe data 
    - Kita bisa gunakan = tipe data di dalam operator <>
*/

describe("generic parameter default", () => {
  class SimpleGeneric<T = string> {
    private value?: T;

    setValue(value: T) {
      this.value = value;
    }

    getValue(): T | undefined {
      return this.value;
    }
  }

  it("should create simple generic", async () => {
    const simple = new SimpleGeneric();
    simple.setValue("Eko");
    // simple.setValue(100);
    // simple.setValue(true);

    expect(simple.getValue()!.toUpperCase()).toBe("Eko");
  });
});
