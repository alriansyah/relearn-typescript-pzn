/*
    Optional Properties :
    - Secara default, saat kita membuat attribute di Object atau Type, maka attribute tersebut wajib diisi nilainya
    - Namun, kadang-kadang tidak semua attribute itu wajib diisi nilainya
    - Pada kasus attribute nya tidak wajib diisi, kita bisa tambahkan tanda ? untuk menandakan bahwa itu adalah optional
*/

describe("Object", function () {
  it("should support in typescript", function () {
    const person: { id: string; name: string; hobbies?: string[] } = {
      id: "1",
      name: "Eko",
    };

    console.info(person);

    person.id = "2";
    person.name = "Kurniawan";

    console.info(person);
  });
});
