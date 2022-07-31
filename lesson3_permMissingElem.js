/* An array A consisting of N different integers is given. 
The array contains integers in the range [1..(N + 1)], 
which means that exactly one element is missing.

Your goal is to find that missing element.

Write a function:

function solution(A);

that, given an array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
the elements of A are all distinct;
each element of array A is an integer within the range [1..(N + 1)]. */

const array = [2, 3, 1, 5];
const array2 = [1, 2, 3, 4, 5, 5];
const array3 = [1, 30, 4, 21, 100000];

function solution(A) {
  /*  
    array.sort() ===> [ 1, 100000, 21, 30, 4 ]  (문자열의 유니코드 코드 포인트를 따른다)
    array.sort((a, b)=> a-b) ===> [ 1, 4, 21, 30, 100000 ]
  */

  // 1. array를 순서대로 배열
  const arr = A.length !== 0 ? A.sort((a, b) => a - b) : [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) return i + 1;
  }

  return arr.length + 1;
}

console.log("RESULT :", solution(array));
console.log("RESULT :", solution(array2));
console.log("RESULT :", solution(array3));
console.log("RESULT :", solution([]));
