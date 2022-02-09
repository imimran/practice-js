var input = 'ABCdefGHIjkl123.'  // or you could prompt("Enter String: ")

var output = input.replace(/[a-z]/g, function(m) {
    console.log("m", m);
    console.log("test",m.charCodeAt(0) - 32);
  return String.fromCharCode(m.charCodeAt(0) - 32)
})

console.log(output)

// function myToUpper(string) {
//     var map = { a: 'A', b: 'B', c: 'C', d: 'D', e: 'E', f: 'F', g: 'G', h: 'H', i: 'I', j: 'J', k: 'K', l: 'L', m: 'M', n: 'N', o: 'O', p: 'P', q: 'Q', r: 'R', s: 'S', t: 'T', u: 'U', v: 'V', w: 'W', x: 'X', y: 'Y', z: 'Z' }
  
//     var output = ''
//     for (var i = 0; i < string.length; i++)
//       output += map[string[i]] || string[i]
  
//     return output
//   }
  
//   console.log( myToUpper('ABCdefGHIjkl123.') )

console.log(".........................");
function checkPalindrome(str) {

  // find the length of a string
  const len = string.length;
   console.log("len", len/2);
  // loop through half of the string
  for (let i = 0; i < len / 2; i++) {
    console.log("i", i);
            console.log("len/2", i < len / 2);
            console.log("string[i]",string[i]);
            console.log("string[len - 1 - i]", string[len - 1 - i]);
      // check if first and last string are same
      if (string[i] !== string[len - 1 - i]) {
          return 'It is not a palindrome';
      }
  }
  return 'It is a palindrome';
}

// take input
const string = "cookooc";

// call the function
const value = checkPalindrome(string);

console.log(value);