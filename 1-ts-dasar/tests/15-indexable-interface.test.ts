/*
    Indexable Interface :
    - Interface juga bisa digunakan untuk membuat tipe data dengan jenis yang memiliki index, seperti Array atau Object
*/

describe("Interface", function () {
  it("should support indexable interface", function () {
    interface StringArray {
      [index: number]: string;
    }

    const names: StringArray = ["Eko", "Kurniawan", "Khannedy"];
    console.info(names);
  });

  it("should support indexable interface for non number index", function () {
    interface StringDictionary {
      [key: string]: string;
    }

    const dictionary: StringDictionary = {
      name: "Eko",
      address: "Indonesia",
    };
    console.info(dictionary);

    expect(dictionary["name"]).toBe("Eko");
    expect(dictionary["address"]).toBe("Indonesia");
  });
});
