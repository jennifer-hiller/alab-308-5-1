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
