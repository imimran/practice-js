//Problem 1
const vowels = ["a", "e", "i", "o", "u"];

function countVowels(str) {
  let count = 0;

  for (letter of str.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("Bangladeshi"));

//Problem 2
const arr = [2, 4, 1, 3];

let total = 0;

// for( let i=0; i< arr.length; i++){
//     total += arr[i] * 2
// }

arr.forEach((item) => {
  total += item * 2;
});

console.log(total);

//Problem 3

const furits = ["appel", "orange", "banana", "coconut"];

let str = "";

furits.forEach((item) => {
  str += item + " ";
});

console.log("str", str);

const multi_arr = [...furits, "greps", "mango"];
console.log("multi_arr", multi_arr);

//Problem 4
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  fullname: function () {
    return this.firstName + " " + this.lastName;
  },
};

const imran = Object.create(person);
imran.firstName = "imran";
imran.lastName = "hossain";
imran.age = 29;
console.log(imran.fullname());
console.log("object", imran);

//Problem 5
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sleep() {
    console.log(`${this.name} is sleeping`);
  }
}

const imra = new Person("Imran", 29);
imra.sleep();

//problem 8

const title = "ABCdefg1234";

const toUpperCase = (str) => {
  const convert = str.replace(/[a-z]/g, (letter) => {
    return String.fromCharCode(letter.charCodeAt(0) - 32);
  });
  return convert;
};

console.log("toUpperCase", toUpperCase(title));

//problem 9
//Check Palindrome

const checkPalindrome = (str) => {
  const len = str.length;

  //loop through hulf length
  for (let i = 0; i < len / 2; i++) {
    //check first and last string are same
    if (str[i] !== str[len - 1 - i]) {
      return "It is not a palindrome";
    }
  }
  return "It is a palindrome";
};

console.log("checkPalindrome", checkPalindrome("rar"));
