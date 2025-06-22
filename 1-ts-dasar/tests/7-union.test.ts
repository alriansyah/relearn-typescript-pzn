/*
    Union Type :
    - Seperti yang sudah kita tahu, JavaScript sebenarnya bisa menyimpan berbagai jenis tipe data di variabel yang sama
    - Namun di TypeScript, hal itu dilarang karena praktek yang buruk
    - Pada kasus jika kita ingin membuat variabel yang bisa berubah bentuk tipe data, kita bisa memberi tahunya menggunakan union type
    - Secara otomatis TypeScript akan membolehkan kita mengubah tipe data, namun sesuai yang sudah ditentukan di union type nya

    Menggunakan Union Type :
    - Saat kita membuat Union Type, kita perlu berhati-hati ketika memanggil method terhadap variabel tersebut
    - Hal ini karena tipe datanya bisa berubah, oleh karena itu ada baiknya kita melakukan pengecekan tipe data terlebih dahulu menggunakan typeof
*/

describe("Union Type", function () {
  it("should support in typescript", function () {
    let sample: number | string | boolean = "Eko";
    console.info(sample);

    sample = 100;
    console.info(sample);

    sample = true;
    console.info(sample);
  });

  it("should support typeof operator", function () {
    function process(value: number | string | boolean) {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value + 2;
      } else {
        return !value;
      }
    }

    expect(process("Eko")).toBe("EKO");
    expect(process(100)).toBe(102);
    expect(process(true)).toBe(false);
  });
});
