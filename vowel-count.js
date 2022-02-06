// function getVowels(str){
//     console.log("Start Count....");
//     let findVowels = str.match(/[aeiou]/gi)
//     console.log("findVowels", findVowels);
//     return findVowels === null ? 0 : findVowels.length
// }

// const count = getVowels("Banglasesh")
// console.log(count);

const vowels = ["a", "e", "i", "o", "u"];

function countVowels(str) {
  let count = 0;

  for (letter of str.toLowerCase()) {
    if (vowels.includes(letter)) {
        console.log("vowel",letter);
      count++;
    }
  }
  return count;
}

const total = countVowels("Bangladeshi");
console.log(total);
