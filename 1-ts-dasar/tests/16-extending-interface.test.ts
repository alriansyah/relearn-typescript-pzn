/*
    Extending Interface :
    - Interface bisa melanjutkan (extends) ke Interface lain
    - Secara otomatis attribute Interface yang dilanjutkan dimiliki juga oleh interface tersebut
    - Ini membuat kita lebih mudah ketika membuat tipe data yang kompleks
*/

import { Employee, Manager } from "../src/employee";

describe("Interface", function () {
  it("should support extends interface", function () {
    const employee: Employee = {
      id: "1",
      name: "Eko",
      division: "IT",
    };

    console.info(employee);

    const manager: Manager = {
      id: "2",
      name: "Kurniawan",
      division: "IT",
      numberOfEmployees: 10,
    };

    console.info(manager);
  });
});
