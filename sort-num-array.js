const num = [20, 5, 15, 25, 5, 3];

// console.log(num.sort());

const sortArray = (arr) => {
  const value = arr.sort((a, b) => {
    return a - b;
  });
  return value;
};

console.log(sortArray(num));
