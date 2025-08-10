/*
    Generic Collection :
    - Sebelumnya kita pernah menggunakan tipe data Array, dimana Array sebenarnya adalah tipe data Generic, oleh karena itu kita bisa menggunakan Array<tipe> ketika membuat Array
    - Selain Array, ada tipe data Collection (kumpulan data) yang berupa tipe data Generic, yaitu :
    - Set<T>, yaitu tipe data collection yang berisi data unique dan tidak ada jaminan urutan data
    - Map<K, V> yaitu tipe data collection yang berisi data key-value

    Array<T> :
    - Generic type Array<T> sebenarnya merupakan representasi dari tipe data array di JavaScript
    - Oleh karena itu, cara penggunaannya sama seperti array di JavaScript
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

    Set<T> :
    - Generic type Set<T> sebenarnya merupakan representasi dari tipe data Set di JavaScript
    - Oleh karena itu, cara penggunaannya sama seperti Set di JavaScript
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

    Map<K, V> :
    - Generic type Map<K, V> sebenarnya merupakan representasi dari tipe data Map di JavaScript
    - Oleh karena itu, cara penggunaannya sama seperti Map di JavaScript
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
*/

describe("generic collection", () => {
  // Array<T>
  it("should support array", async () => {
    const array = new Array<string>();
    array.push("Eko");
    array.push("Kurniawan");

    expect(array[0]).toBe("Eko");
    expect(array[1]).toBe("Kurniawan");
  });

  // Set<T> : tipe data unique
  it("should support set", async () => {
    const set = new Set<string>();
    set.add("Eko");
    set.add("Kurniawan");
    set.add("Eko");

    expect(set.size).toBe(2);
    expect(set.has("Eko")).toBe(true);
    expect(set.has("Kurniawan")).toBe(true);
  });

  // Map<K, V> : tipe data key-value
  it("should support map", async () => {
    const map = new Map<string, number>();
    map.set("Eko", 100);
    map.set("Budi", 96);

    expect(map.get("Eko")).toBe(100);
    expect(map.get("Budi")).toBe(96);
  });
});
