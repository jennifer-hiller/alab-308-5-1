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
