// Part 1
function getSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
function getAverage(arr) {
  let sum = getSum(arr);
  let count = arr.length;
  return sum / count;
}
function getLongestString(arr) {
  let longest = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  return longest;
}
function getStringsLongerThan(arr, length) {
  let longer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > length) {
      longer.push(arr[i]);
    }
  }
  return longer;
}
function allNumbersBetween1AndN(num, a = 1) {
  if (a <= num) {
    console.log(a);
    a++;
    allNumbersBetween1AndN(num, a);
  }
}

// Part 2
const data = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" },
];

function sortByAge(arr) {
  console.log(arr.sort((a, b) => a.age - b.age));
}
function occupationToJob(arr) {
  arr.map((obj) => {
    obj.job = obj.occupation;
    delete obj.occupation;
  });
  console.log(arr);
}
function getAges(arr) {
  const totalAge = arr.reduce((total, current) => {
    return total + Number(current.age);
  }, 0);
  console.log("totalAge", totalAge);
  console.log("averageAge", totalAge / arr.length);
}

// Part 3
function incrementAge(obj) {
  if (!obj.age) {
    obj.age = 0;
  }
  obj.age = Number(obj.age) + 1;
}
function incrementAgeCopy(obj) {
  const copy = { ...obj };
  if (!copy.age) {
    copy.age = 0;
  }
  copy.age = Number(copy.age) + 1;
  return copy;
}
