const num = [1, 2, 3, 4];

function addNum(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    // console.log("item", item);
    count += item * 2;
  }
  return count;
}

console.log("for loop", addNum(num));

function countTotal(arr) {
  let count = 0;
  arr.forEach((element) => {
    count += element * 2;
  });
  return count;
}

console.log("for-each", countTotal(num));

const mapArray = (arr) => {
  let count = 0;
  arr.map((item) => {
    return (count += item * 2);
  });
  return count;
};

console.log("map", mapArray(num));

const forOfArray = (arr) => {
  let count = 0;
  for (item of arr) {
    count += item * 2;
  }
  return count;
};

console.log("forOfArray", forOfArray(num));

const reduceArray = (arr) => {
  const totalV = arr.reduce((total, value) => {
    return total + value;
  });
  return totalV * 2 ;
};

console.log("reduceArray", reduceArray(num));
