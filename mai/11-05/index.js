class WashingMachine {
  constructor(brand, load, spinTours) {
    this.brand = brand;
    this.load = load;
    this.spinTours = spinTours;
  }

  display() {
    return `This ${this.brand} washing machine has ${this.load} Kg load and ${this.spinTours} spin tours.`;
  }
}
const Bosch = new WashingMachine("Bosch", "9", "1400");
const LG = new WashingMachine("LG", "8", "1200");
const Samsung = new WashingMachine("Samsung", "10", "1600");

console.log(Bosch.display());
console.log(LG.display());
console.log(Samsung.display());

// Creat a constructor function that receive product details (productName,prise,inventory) thin build a method to display this data in clear outputted form
// build two product using your constructor function
// i.e : (Pepsi,2.33,2232) -> Form item Pepsi selling prise 2.33€. we have 2232 in our store

function Product(productName, prise, inventory) {
  this.productName = productName;
  this.prise = prise;
  this.inventory = inventory;
  this.showInfo = function () {
    console.log(
      `Form item ${this.productName} selling prise ${this.prise}€. we have ${this.inventory} in our store`
    );
  };
}
const drink = new Product("Pepsi", 2.33, 2232);
drink.showInfo();

// get & set, create a car object that uses getter and setter method to get and set the following (modelName,modelNumber,enginCapacity)
// first get the data
// then set the data

const car = {
  modelName: "Audi",
  modelNumber: "A8",
  enginCapacity: 500,
  get data() {
    console.log(
      `This ${this.modelName} ${this.modelNumber} has ${this.enginCapacity}.`
    );
  },
  set data(obj) {
    this.modelName = obj.name;
    this.modelNumber = obj.number;
    this.enginCapacity = obj.cap;
  },
};
car.data;
car.data = { name: "BMW", number: "Z4", cap: 320 };
car.data;
