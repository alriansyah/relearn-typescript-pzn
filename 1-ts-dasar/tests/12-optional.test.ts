/*
    Null dan Undefined :
    - Saat kita menggunakan ? pada variabel atau parameter, secara otomatis kita bisa mengirim data undefined / data yang nilainya belum terdefinisi
    - Tapi kadang, kadang, ada kasus kita juga ingin mengirim data null, pada kasus ini kita juga bisa menggunakan tipe data null
    - Optional Parameter itu sebenarnya yang bisa diterima adalah data aslinya yang memang memiliki nilainya dan undefined. tidak bisa null
    - Karena null memiliki tipe data tersendiri jadi opsinya bisa ditambah melalui union type menggunakan | null
*/

describe("Optional Parameter", function () {
  it("should support null and undefined", function () {
    function sayHello(name?: string | null) { // hanya bisa menerima: undefined, string, dan null
      if (name) {
        console.info(`Hello ${name}`);
      } else {
        console.info("Hello");
      }
    }

    sayHello("Eko");
    const name: string | undefined = undefined;
    sayHello(name);
    sayHello(null);
  });
});
