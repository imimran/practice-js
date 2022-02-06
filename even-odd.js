const num = [2, 5, 7, 10, 13];

let even = [];
let odd = [];

num.forEach((item) => {
  if (item % 2 == 0) {
    console.log(item + " is even");
    even.push(item);
  } else {
    console.log(item + " is odd");
    odd.push(item);
  }
});

console.log("odd", odd);
console.log("even", even);
