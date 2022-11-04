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
// class Car {
//   constructor(brand, model) {
//     this.brand = brand;
//     this.model = model;
//     this.speed = 0;
//     this.motion = "The car isn't moving";
//   }
//   checkMotion = () => {
//     this.motion = this.speed > 0 ? "The car is moving" : "The car isn't moving";
//   };
//   accelerate = (newSpeed) => {
//     this.speed += newSpeed;
//     this.checkMotion();
//   };
//   brake = (newSpeed) => {
//     if (newSpeed < this.speed) {
//       this.speed -= newSpeed;
//     } else {
//       this.speed = 0;
//     }
//     this.checkMotion();
//   };
//   emergencyBrake = () => {
//     this.speed = 0;
//     this.checkMotion();
//   };
//   status = () => {
//     `this is ${this.brand} , ${this.model}, is moving with ${this.speed} and status is ${this.motion}`;
//   };
// }
// const car1 = new Car("alfaRomeo", "stelvio");
// car1.accelerate(100);
// car1.status;
// console.log(car1);

//4
const addAsync = (x, y) => {
  return new Promise((resolve, reject) => {
    if (x && y) {
      resolve(x + y);
    } else {
      reject("invalid numbers");
    }
  });
};
addAsync(1, undefined)
  .then((val) => console.log(val))
  .catch((err) => console.log(err));
