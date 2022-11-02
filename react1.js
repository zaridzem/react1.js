"use strict";
// 1
// let array = [1, -5, -4, 10, 20, -7, 8, -9];
// let array2 = array
//   .filter((x) => x > 0)
//   .reduce((total, current) => total + current, 0);
// console.log(array2);
//2
// let fruit1 = ["apple", "banana", "mango", "apple", "grape", "apple"];

// let fruit2 = fruit1.reduce((allFruits, fruit) => {
//   let countedFruit = allFruits[fruit] ?? 0;
//   return {
//     ...allFruits,
//     [fruit]: countedFruit + 1,
//   };
// }, {});
// console.log(fruit2);
//3
class Car {
  constructor(brand, model, speed = 0, motion = "The car isn't moving") {
    this.brand = brand;
    this.model = model;
    this.speed = speed;
    this.motion = motion;
  }

  status = () => {
    this.check_Motion();
    return `car ${this.brand} ${this.model} is moving ${this.speed} km/h and car status is: ${this.motion}`;
  };

  check_Motion = () => {
    if (this.speed > 0) {
      this.motion = "The car is moving";
    } else {
      this.motion = "The car isn't moving";
    }
  };

  accelerate = (speedmeter = 0) => {
    if (speedmeter > 0) {
      return this.status((this.speed += speedmeter));
    } else {
      return this.status();
    }
  };
  brake = (speedoff = 0) => {
    if (speedoff > this.speed) {
      return "Invalid Argument";
    } else {
      return this.status((this.speed -= speedoff));
    }
  };
  emergency_Brake = () => {
    return this.status((this.speed = 0));
  };
}

let result = new Car("AlfaRomeo", "Stelvio", 150);

console.log(result.accelerate(80));
console.log(result.brake(60));
console.log(result.emergency_Brake());
//4
// function addAsync(x, y) {
//   return new Promise((resolve, reject) => {
//     if (
//       typeof x == "number" &&
//       typeof x != "undefined" &&
//       typeof y == "number" &&
//       typeof y != "undefined"
//     ) {
//       resolve("Correct");
//     } else {
//       reject("Error");
//     }
//   });
// }
// addAsync(1, 8)
//   .then((val) => console.log(val))
//   .catch((err) => console.log(err));
