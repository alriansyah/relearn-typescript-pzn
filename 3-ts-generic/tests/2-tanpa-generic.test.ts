/*
    Tanpa Generic :
    - Tanpa generic, saat kita ingin membuat Class yang berisi tipe data yang bisa berbeda-beda
    - Maka kita harus menggunakan tipe data any
*/

describe("no generic", () => {
  class Data {
    value: any;
    constructor(value: any) {
      this.value = value;
    }
  }

  it("should accept all values", async () => {
    const data = new Data("Eko");
    // data.value = 100;

    console.info(data.value.toUpperCase());
  });
});
