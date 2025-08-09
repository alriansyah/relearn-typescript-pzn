/*
    Generic Function :
    - Saat kita membuat tipe data generic di Class, tipe data tersebut bisa digunakan diseluruh bagian Class
    - Namun, kadang kita tidak membuat class, kita hanya membuat function misalnya
    - Generic juga bisa digunakan pada function, kita bisa menggunakan cara yang sama dengan menempatkan tanda <> setelah nama function
*/

describe("generic function", () => {
  class GenericData<T> {
    value: T;

    constructor(value: T) {
      this.value = value;
    }

    // Function yang ada di dalam class
    get(): T {
      return this.value;
    }

    set(value: T) {
      this.value = value;
    }
  }

  // Function yang berdiri sendiri
  function create<T>(value: T): T {
    return value;
  }

  it("should support function generic", async () => {
    const result: string = create<string>("Eko");
    expect(result).toBe("Eko");

    const result2: number = create<number>(123);
    expect(result2).toBe(123);
  });
});
