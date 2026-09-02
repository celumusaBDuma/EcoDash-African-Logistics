class Livestock {
  constructor(type, name, age, health = 100) {
    this.type = type;
    this.name = name;
    this.age = age;
    this.health = health;
    this.hunger = 0;
    this.water = 100;
  }

  feed(amount) {
    this.hunger = Math.max(0, this.hunger - amount);
    this.health = Math.min(100, this.health + amount * 0.2);
  }

  drink(amount) {
    this.water = Math.min(100, this.water + amount);
  }

  dailyUpdate() {
    this.hunger += 10;
    this.water -= 15;

    if (this.hunger > 80 || this.water < 20) {
      this.health -= 5;
    }

    this.health = Math.max(0, this.health);
  }

  getStatus() {
    return {
      type: this.type,
      name: this.name,
      age: this.age,
      health: this.health,
      hunger: this.hunger,
      water: this.water
    };
  }
}


const cow = new Livestock("Cow", "Mazi", 3);
const goat = new Livestock("Goat", "Kito", 2);
const sheep = new Livestock("Sheep", "Zuri", 1);


cow.feed(30);
cow.drink(25);

goat.feed(20);
goat.drink(20);

sheep.feed(15);
sheep.drink(20);


cow.dailyUpdate();
goat.dailyUpdate();
sheep.dailyUpdate();

console.log(cow.getStatus());
console.log(goat.getStatus());
console.log(sheep.getStatus());
