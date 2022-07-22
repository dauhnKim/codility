/*
A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

Write a function:
class Solution { public int solution(int N); }
that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..2,147,483,647].
*/

function solution(N) {
  // 1. 입력받은 숫자를 2진수 표현으로 변경한다.
  // 2. 2진수 표현에서 첫번째 1과 마지막 1까지를 잘라낸다.
  // 3. 1을 기준으로 split 하면 0으로 구성된 문자열 배열이 생성된다.
  // 4. 해당 문자열의 길이 중 최대값을 구한다.

  // 1.
  const binary = N.toString(2);
  console.log("binary", binary);

  // 2. & 3.
  const array = binary
    .substring(binary.indexOf("1"), binary.lastIndexOf("1") + 1)
    .split("1");
  console.log("array", array);

  // 4.
  let answer = 0;
  for (let idx = 0; idx < array.length; idx++) {
    const num = array[idx];
    if (num.length > answer) {
      answer = num.length;
    }
  }

  return answer;
}

console.log("solution(N)", solution(1041));
console.log("solution(N)", solution(529));
console.log("solution(N)", solution(20));
console.log("solution(N)", solution(3));
