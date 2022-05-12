class WashingMachine {
    constructor(brand, load, spinTours) {
        this.brand = brand;
        this.load = load;
        this.spinTours = spinTours;
    }

  display() {
      return `This ${this.brand} washing machine has ${this.load} Kg load and ${this.spinTours} spin tours.`
  }
}
const Bosch = new WashingMachine("Bosch", "9", "1400");
const LG = new WashingMachine("LG", "8", "1200");
const Samsung = new WashingMachine("Samsung", "10", "1600");

console.log(Bosch.display())
console.log(LG.display())
console.log(Samsung.display())