// const array = [1, 2, 3, 4, 5] // print 30

// let result = 0;

// for( let i=0; i< array.length; i++){
//     result += array[i]
// }
// console.log(result*2);



// const array = [1, 2, 3, 4, 5];
// let result = 0;

// array.forEach(number => {
//   result += number;
// // console.log(number);
// })

// console.log(result*2); // Should give 20



// let arr = [1, 2, 3, 4];

// let sum = arr.reduce((v, i) => (v + i));

// console.log(sum);



// const arr = [1, 2, 3, 4];
// let total = 0;

// for (let value of arr) {
//     // console.log(value);
//     total += value; 
// }
// console.log(total*2)


// let array = [1, 2, 3, 4];
// let total = 0

// for(let i in array)
// {
//     total += array[i]
// }

// console.log(total)


// const arr = [1, 2, 3, 4];
// let total = 0;

// arr.map((item)=>{
//     return total += item
// })

// console.log(total*2);


const arr = [1, 2, 3, 4];

const sum = arr.reduce((pre, next)=>{
    return pre + next
},0)
console.log(sum*2);