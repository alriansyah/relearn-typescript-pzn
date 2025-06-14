describe("Data Type", function () {
  it("should must declare", function () {
    // let name = "Eko Kurniawan Khannedy"; // nilai awalnya string, dan jadi reassign menjadi number maka akan error, karena terdetect dari awal di assign berupa string
    let name: string = "Eko Kurniawan Khannedy";
    let balance: number = 1000000;
    let isVip: boolean = true;

    console.info(name);
    console.info(balance);
    console.info(isVip);

    name = 100;
    balance = "eko";
    isVip = 100;
  });

  /*
    Babel Typescript :
    - Untuk menjalankan unit test, kita menggunakan Jest dan Babel
    - Banyak programmer TypeScript yang mengeluh ketika proses development, menggunakan TypeScript lebih lambat karena harus melakukan kompilasi terlebih dahulu
    - Oleh karena itu, @babel/typescript melakukan cara kompilasi nya dengan cara menghapus seluruh kode TypeScript dan menjadikan kode JavaScript, hal ini memang lucu, tapi inilah kenyataannya
    - Oleh karena itu, error TypeScript yang sering harusnya terjadi di Unit Test kadang tidak terjadi karena kode TypeScript dihapus oleh Babel
    - Oleh karena itu, kita harus secara regular melakukan pengecekan menggunakan perintah : npx tsc
    - Untuk memastikan tidak ada kode TypeScript kita yang bermasalah

    Perhatian :
    - kita harus pastikan ketika menggunakan typescript tidak hanya mengetest jest nya, pastikan juga kompilasi tanpa adanya error

    Typescript Compiler :
    - Untuk menjalankan TypeScript Compiler secara terus menerus, kita juga bisa menggunakan perintah : npx tsc --watch
   */
});
