/*
    Namespace :
    - Selain menggunakan JavaScript Modules, di TypeScript ada cara lain untuk mengorganisir kode program kita, yaitu menggunakan Namespace
    - Namespace biasanya digunakan untuk mengorganisir kode ketika dalam satu module terdapat banyak sekali kode, sehingga bisa kita kelola dalam Namespace
    - Jika Module kita anggap sebuah folder, maka Namespace adalah sub folder di dalam Module
    - Untuk membuat Namespace, kita bisa gunakan kata kunci namespace, dan kita bisa tambahkan class, function, dan lain-lain di dalam Namespace tersebut
    - Tapi nanti ketika kita ingin mengakses isi dari class, function, variable, dan lain-lain di dalam Namespace tersebut, kita harus sebutkan dulu nama Namespace nya didepan nama class, function, variable, dan lain-lain tersebut
*/

import { MathUtil } from "../src/math-util";

describe("Namespace", () => {
  it("should support", () => {
    console.info(MathUtil.PI);
    console.info(MathUtil.sum(1, 2, 3, 4, 5));
  });
});
