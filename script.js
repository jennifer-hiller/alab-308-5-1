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
