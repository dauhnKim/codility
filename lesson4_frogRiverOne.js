/* 
A small frog wants to get to the other side of a river. 
The frog is initially located on one bank of the river (position 0) and wants to get to the opposite bank (position X+1). 
Leaves fall from a tree onto the surface of the river.

You are given an array A consisting of N integers representing the falling leaves. 
A[K] represents the position where one leaf falls at time K, measured in seconds.

The goal is to find the earliest time when the frog can jump to the other side of the river. 
The frog can cross only when leaves appear at every position across the river from 1 to X 
(that is, we want to find the earliest moment when all the positions from 1 to X are covered by leaves). 
You may assume that the speed of the current in the river is negligibly small, 
i.e. the leaves do not change their positions once they fall in the river.

For example, you are given integer X = 5 and array A such that:

  A[0] = 1
  A[1] = 3
  A[2] = 1
  A[3] = 4
  A[4] = 2
  A[5] = 3
  A[6] = 5
  A[7] = 4

In second 6, a leaf falls into position 5. 
This is the earliest time when leaves appear in every position across the river.

Write a function:

function solution(X, A);

that, given a non-empty array A consisting of N integers and integer X, 
returns the earliest time when the frog can jump to the other side of the river.

If the frog is never able to jump to the other side of the river, the function should return −1.

For example, given X = 5 and array A such that:

  A[0] = 1
  A[1] = 3
  A[2] = 1
  A[3] = 4
  A[4] = 2
  A[5] = 3
  A[6] = 5
  A[7] = 4
the function should return 6, as explained above.

Write an efficient algorithm for the following assumptions:

N and X are integers within the range [1..100,000];
each element of array A is an integer within the range [1..X].

*/

/* 
1. 새로운 Set 변수 s를 생성
2. A 배열의 루프를 돌며, s에 값( A[idx] )을 추가
3. 만약 s의 길이가 X와 같다면, 1 부터 X 까지의 수가 모두 채워졌다는 의미이므로 해당 index를 반환
    -> 배열 A 내의 요소의 범위가 1 ~ X라는 전제가 깔려있기 때문에 가능한 로직
4. 루프를 돌고 난 뒤에도 index가 반환되지 않았을 경우에는 -1을 최종적으로 반환
*/

let C = [1, 3, 1, 4, 2, 3, 5, 4];
let Y = 5;

function solution(X, A) {
  let set = new Set();

  for (let i = 0; i < A.length; i++) {
    set.add(A[i]);

    if (set.size === X) {
      return i;
    }
  }

  return -1;
}

console.log(solution(Y, C));
