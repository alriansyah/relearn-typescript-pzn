describe('Data Type', function () {
    it('should must declare', function () {

        // let name = "Eko Kurniawan Khannedy"; // nilai awalnya string, dan jadi reassign menjadi number maka akan error, karena terdetect dari awal di assign berupa string
        let name: string = "Eko Kurniawan Khannedy";
        let balance: number = 1000000;
        let isVip:boolean = true;

        console.info(name);
        console.info(balance);
        console.info(isVip);

        // name = 100;
        // balance = "eko";
        // isVip = 100;

    });
});
