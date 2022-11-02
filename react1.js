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
