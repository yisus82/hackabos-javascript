const getMaxSubSum = arr => {
  let maxEndingHere = arr[0];
  let maxSoFar = arr[0];
  arr.slice(1).forEach(value => {
    maxEndingHere = Math.max(value, maxEndingHere + value);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  });
  return maxSoFar;
};

alert(getMaxSubSum([-1, 2, 3, -9]) == 5);
alert(getMaxSubSum([2, -1, 2, 3, -9]) == 6);
alert(getMaxSubSum([-1, 2, 3, -9, 11]) == 11);
alert(getMaxSubSum([-2, -1, 1, 2]) == 3);
alert(getMaxSubSum([100, -9, 2, -3, 5]) == 100);
alert(getMaxSubSum([1, 2, 3]) == 6);
