const toNumber = str => str.match(/[0-9]+.?[0-9]*/);

const sumArray = arr => {
  let result = 0;
  arr.forEach(element => {
    result += element;
  });
  return result;
};

const sumInput = () => {
  let nums = [];
  while (true) {
    let ans = prompt('Enter a number', 0);
    if (ans === '' || ans === null) {
      break;
    } else {
      const num = +toNumber(ans);
      if (num === '') {
        break;
      }
      nums.push(num);
    }
  }
  return sumArray(nums);
};

// alert(sumInput());

/**
 * Crea una funcion que checkee un string
 * y devuelva true/false dependiendo de si es palindromo o no
 *
 */

const isPalindrome = str => {
  const cleanStr = str.replace(/\s/g, '').toLowerCase();
  const middle = cleanStr.length / 2;
  const firstHalf = cleanStr.slice(0, Math.floor(middle)).split('');
  const secondHalf = cleanStr.slice(Math.ceil(middle)).split('');
  secondHalf.reverse();
  return firstHalf.toString() === secondHalf.toString();
};

// alert(isPalindrome(prompt('Enter a string', '')));

/*An array A consisting of N integers is given. Rotation of the array means that each element is shifted right by one index, and the last element of the array is moved to the first place. For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7] (elements are shifted right by one index and 6 is moved to the first place).
The goal is to rotate array A K times; that is, each element of A will be shifted to the right K times.
Write a function:
function solution(A, K);
that, given an array A consisting of N integers and an integer K, returns the array A rotated K times.
For example, given
    A = [3, 8, 9, 7, 6]
    K = 3
the function should return [9, 7, 6, 3, 8]. Three rotations were made:
    [3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]
    [6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]
    [7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]
For another example, given
    A = [0, 0, 0]
    K = 1
the function should return [0, 0, 0]
Given
    A = [1, 2, 3, 4]
    K = 4
the function should return [1, 2, 3, 4]
Assume that:
N and K are integers within the range [0..100];
each element of array A is an integer within the range [−1,000..1,000].
In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.
*/

const rotate = (A, K) => {
  let arr = [];
  A.forEach((value, index) => {
    arr[(index + K) % A.length] = value;
  });
  return arr;
};

// alert(rotate([3, 8, 9, 7, 6], 3)); // [9, 7, 6, 3, 8]
// alert([0, 0, 0], 1); // [0, 0, 0]
// alert([1, 2, 3, 4], 4); // [1, 2, 3, 4]

/*A non-empty array A consisting of N integers is given.
A permutation is a sequence containing each element from 1 to N once, and only once.
For example, array A such that:
    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
is a permutation, but array A such that:
    A[0] = 4
    A[1] = 1
    A[2] = 3
is not a permutation, because value 2 is missing.
The goal is to check whether array A is a permutation.
Write a function:
function solution(A);
that, given an array A, returns 1 if array A is a permutation and 0 if it is not.
For example, given array A such that:
    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
the function should return 1.
Given array A such that:
    A[0] = 4
    A[1] = 1
    A[2] = 3
the function should return 0.
Write an efficient algorithm for the following assumptions:
N is an integer within the range [1..100,000];
each element of array A is an integer within the range [1..1,000,000,000].*/

const isPermutation = A => {
  if (A.length == 0) {
    return 0;
  }
  let numbers = new Set();
  for (let i = 0; i < A.length; i++) {
    if (A[i] > A.length || numbers.size() == numbers.add(A[i]).size()) {
      return 0;
    }
  }
  return 1;
};

// alert(isPermutation([4, 1, 3, 2])); // 1
// alert(isPermutation([4, 1, 3])); // 0
