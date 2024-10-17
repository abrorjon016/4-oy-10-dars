// Length

// 1-masala
// let bugatti = ["shiron", "veyron", "tourbillion", "v16"];
// console.log(bugatti.length);

//  2-masala
// let bugatti = ["shiron", "veyron", "tourbillion", 16];
// console.log(bugatti.length);

// 3-masala
// let bugatti = [1, 2, 3, 4, 5];
// console.log(bugatti[bugatti.length - 1]);

//
//
//

// concat

// 1-masala
// let bugatti = ["shiron", "veyron", "tourbillion", "v16"];
// let bugatata = ["shiron", "veyron", "tourbillion", "v16"];
// let concat = bugatti.concat(bugatata);
// console.log(concat);

// 2-masala
// let arr1 = "tourbillion";
// let arr2 = "veyron";
// let arr3 = "shiron";
// let res = arr1.concat(arr2, arr3);
// console.log(res);

// 3-masala
// let bugatti = ["shiron", "veyron", "tourbillion", "v16"];
// let bugatata = ["shiron", "veyron", "tourbillion", "v16"];
// let newage = bugatti.concat(bugatata);
// newage.push("seondechi");
// console.log(newage);

//
//
//

// includes

// 1 - masala
// let bugatti = ["shiron", "veyron", "tourbillion", "v16"];
// let newage = "v17";
// console.log(bugatti.includes(newage));

// 2-masala
// 1-masala blan 1 xil

// 3-masala
// let bugatti = [1, 4, 7, 9, 11];
// console.log(bugatti.some((num) => num > 10));

//
//
//

// IndexOf

// 1-masala
// let bugatti = [1, 4, 4, 9, 11];
// let num = 4;
// let res = bugatti.indexOf(num);
// console.log(res);

// 2-masala
// const arr = [1, 2, 3, 4, 4, 5, 6, 7];
// console.log(arr.lastIndexOf(4));

// 3-masala
// 2-masala bilan 1 xil

//
//
//

// sort

// 1-masala
// let arr = [1, 2, 3, 4, 4, 5, 6, 7];
// arr.sort((a, b) => b - a);
// console.log(arr);

// 2 - masala
// ?

// 3-masala
// let arr = [1, 2, 3, 4, 4, 5, 6, 7];
// arr.sort((a, b) => b - a);
// console.log(arr);

//
//
//

// Reverse

// 1-masala
// let arr = [1, 2, 3, 4, 4, 5, 6, 7];
// arr.reverse();
// console.log(arr);

// 2-masala
// let str = "Salom";
// let res = "";
// for (let i = 0; i < str.length; i++) {
//   res += str[i];
// }
// console.log(res);

//
//
//

// ToString

// 1- masala
// let bugatti = [1, 2, 3, 4, 4, 5, 6, 7];
// let res = bugatti.toString();
// console.log(res);

// 2-masala
// let bugatti = ["shiron", "veyron", "tourbillion", "v16"];
// let res = bugatti.join(",");
// console.log(res);

// 3-masala
//  !!! 1-masala bilan bir xil !!!
// let bugatti = [1, 2, 3, 4, 4, 5, 6, 7];
// let res = bugatti.toString();
// console.log(res);

//
//
//

// join

// 1-masala
// let bugatti = [1, 2, 3, 4, 4, 5, 6, 7];
// let res = bugatti.join("-");
// console.log(res);

// 2-masala
// let bugatti = ["shiron", "veyron", "tourbillion", "v16"];
// let res = bugatti.join(" ");
// console.log(res);

// 3-masala
// let bugatti = ["shiron", "veyron", "tourbillion", "v16"];
// let res = bugatti.join("|");
// console.log(res);

//
//
//

// Push

// 1-masala
// let bugatti = ["shiron", "veyron", "tourbillion"];
// bugatti.push("v16");
// console.log(bugatti);

// 2 - masala
// let bugatti = ["shiron", "veyron", "tourbillion"];
// bugatti.shift();
// console.log(bugatti);

// 3-masala
// let bugatti = ["shiron", "veyron", "tourbillion"];
// bugatti.push("v16");
// bugatti.shift();
// console.log(bugatti);

//
//
//

// unshift

// 1-masala
// let bugatti = ["shiron", "veyron", "tourbillion"];
// bugatti.unshift("v16");
// console.log(bugatti);

// 2-masala
// let bugatti = ["shiron", "veyron", "tourbillion"];
// bugatti.pop();
// console.log(bugatti);

// 3-masala
// let bugatti = ["shiron", "veyron", "tourbillion"];
// bugatti.unshift("v16");
// bugatti.push("ceondeci");
// bugatti.shift();
// bugatti.pop();
// console.log(bugatti);

// Qiyinroq masalalar

// 1-masala
// let arr = [1, 3, 6, 7, 8];
// if (arr.length % 2 == 1) {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i == Math.trunc(arr.length / 2)) {
//       continue;
//     }
//     res.push(arr[i]);
//   }
//   console.log(res);
// }

// jarima masalalar

// 1 - masala
// function sum(a, b, c) {
//   return;
//   a * 2, b * 2, c * 2;
// }
// let arr = [1, 2, 3];
// console.log(arr);

// 2 - masala;
// let bugatti = [1, 2, "veyron"];
// let bugatata = [1, 2, "shiron"];
// let newarr = bugatti.concat(bugatata);
// let res = [];
// for (let i = 0; i < newarr.length; i++) {
//   if (typeof newarr[i] == "number") {
//     res.push(newarr[i]);
//   }
// }
// console.log(res);

// 3-masala
// let bugatti = [1, 2, 3, 4, 5];
// let oldcar = 6;
// let newcar = "tourbillion";
// let search = bugatti.indexOf(oldcar);
// if (search !== -1) {
//   bugatti.splice(search, 1);
// } else {
//   bugatti.push(newcar);
// }
// console.log(bugatti);

// 4-masala
// let massiv = [1, 2, 3, 4, 3, 5, 6];
// let bugatata = 2;
// let car = massiv.indexOf(bugatata);
// let lastcar = massiv.lastIndexOf(bugatata);
// let bugatti = [];
// if (car !== -1 && lastcar !== -1 && car < lastcar) {
//   bugatti = massiv.slice(car, lastcar + 1);
// }
// console.log(bugatti);

// 5-masala
// ???

// 6-masala
// let bugatti = [1, 2, 3, 4, 5];
// let res = bugatti.map((num) => num * 2).join(", ");
// console.log(res);

// 7-masla
// let bugatti = ["shiron", "veyron"];
// let bugatata = ["tourbillion", "v17"];
// let chevy = ["porsche", "bentley"];
// let res = [...bugatti, ...bugatata, ...chevy].join("-").toUpperCase();
// console.log(res);

// 8-masala
// let bugatti = ["shiron", "tourbillion", "veyron","ceondeci"];
// bugatti.shift();
// bugatti.pop();
// let res = bugatti.join(";");
// console.log(res);

// 9-masala
// ?

// 10-masala
// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
// arr.reverse();
// arr.splice(0, 3);
// arr.splice(-2);
// arr.sort((a, b) => a - b);
// console.log(arr);
