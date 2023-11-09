function Person(nama, energi) {
    this.nama = nama;
    this.energi = energi;
    this.makan = function (porsi) {
        this.energi += porsi;
        console.log(`Hallo ${this.nama},Selamat makan`)
    }
}

let Bambang = new Person('Bambang', 22);
let cuaks = new Person('cuaks', 10);