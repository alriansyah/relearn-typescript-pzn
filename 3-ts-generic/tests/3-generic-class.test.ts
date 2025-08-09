/*
    Generic Class :
    - Generic bisa ditambahkan ketika kita membuat Class, caranya bisa menggunakan tanda <> (diamond) setelah nama class, lalu tentukan tipe data generic nya
    - Tipe data generic tersebut bisa digunakan pada class, dan bisa diubah tipenya ketika kita membuat object dari Generic Class tersebut
    - Saat kita membuat object dari Generic Class, kita wajib menentukan tipe data yang ingin kita gunakan untuk mengganti tipe data generic nya
*/

describe("generic", () => {
  class GenericData<T> {
    value: T;

    constructor(value: T) {
      this.value = value;
    }
  }

  it("should support multiple data type", async () => {
    const dataNumber = new GenericData<number>(123);
    // dataNumber.value = "eko"; // error
    // dataNumber.value = true; // error
    expect(dataNumber.value).toBe(123);

    const dataString = new GenericData<string>("Eko");
    // dataString.value = 123; // error
    // dataString.value = true; // error
    const upper = dataString.value.toUpperCase();
    expect(upper).toBe("EKO");
  });
});
