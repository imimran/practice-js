// const cars = ["Saab", "Volvo", "BMW"];
// console.log(cars.toString());
// console.log(typeof(cars));
// console.log(cars.length)

const fruits = ["Banana", "Orange", "Apple", "Mango"];

// let text = "" ;
// for (let i = 0; i < fruits.length; i++) {
//   text +=  fruits[i] + " ";
// }

// let text = "" ;
// fruits.forEach( item =>{
//     text += item + " "
// })

// let text = "" ;
// fruits.map( item => {
//     return text += item + " "
// })

// console.log(text);

// let arr = fruits.join("- ")
// console.log(arr);

// const array1 = ["Cecilie", "Lone"];
// const array2 = ["Emil", "Tobias", "Linus"];
// const array3 = ["Robin", "Morgan"];

// const myChildren = array1.concat(array2, array3);
// console.log(myChildren);

// let sortData = fruits.sort();
// console.log(sortData);
// console.log(fruits.reverse());


// const points = [40, 100, 1, 5, 25, 10];
// let asc = points.sort(function(a, b){return a - b});
// let desc = points.sort(function(a, b){return b - a});
// console.log(desc);
// console.log(asc);

// const num = [ 1,40, 30, 15, 2]
// let desc = num.sort((a, b)=> {
//     return b-a
// })
// console.log(desc);


const numbers = [1, 2, 3, 4]
let total = 0;

numbers.forEach((value, index, array) =>{
    console.log(value);
    console.log(index);
    console.log(array);
    console.log("---------");
    total += value * 2
})
console.log(total);







