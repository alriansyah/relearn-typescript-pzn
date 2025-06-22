/*
    Object Type :
    - Pada kasus yang sederhana, kadang membuat alias terlalu bertele-tele, kita juga bisa membuat tipe data JavaScript Object secara langsung dengan mendeklarasikan detail type nya ketika membuat  variabel nya
    - Hal ini lebih sederhana dibandingkan membuat Type terlebih dahulu
    - tidak disarankan menggunakannya pada kasus yang kompleks
*/

describe("Object", function () {
  it("should support in typescript", function () {
    const person: { id: string; name: string } = {
      id: "1",
      name: "Eko",
    };

    console.info(person);

    person.id = "2";
    person.name = "Kurniawan";

    console.info(person);
  });
});
