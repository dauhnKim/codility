const array = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

function fn(index) {
  /* todo somthing*/
  let series = [1];
  let count = 0;

  for (let i = 0; i <= index; i++) {
    if (i === 0) count = 1;
    if (i !== 0) {
      count = count + series[i - 1];
    }
    series.push(count);
  }
  console.log("series", series);
}

fn(8);
fn(4);

/*
A small frog wants to get to the other side of the road. 
The frog is currently located at position X and wants 
to get to a position greater than or equal to Y. 
The small frog always jumps a fixed distance, D.

Count the minimal number of jumps that the small frog must perform to reach its target.

Write a function:

function solution(X, Y, D);

that, given three integers X, Y and D, returns the minimal number of jumps from position X 
to a position equal to or greater than Y.

For example, given:

  X = 10
  Y = 85
  D = 30
the function should return 3, because the frog will be positioned as follows:

after the first jump, at position 10 + 30 = 40
after the second jump, at position 10 + 30 + 30 = 70
after the third jump, at position 10 + 30 + 30 + 30 = 100
Write an efficient algorithm for the following assumptions:

X, Y and D are integers within the range [1..1,000,000,000];
X ≤ Y.
*/

function solution(X, Y, D) {
  const destination = Y - X;
  const jumps = Math.floor(destination % D)
    ? Math.floor(destination / D) + 1
    : Math.floor(destination / D);

  return jumps;
  /* 풀이 1.
  
  let count = 0;
  let sum = X;
  
  while (sum < Y) {
    sum = sum + D;
    count++;
  }
  
  return count;
  */
}

console.log("solution(10, 85, 30)", solution(10, 85, 30));
console.log("solution(1, 5, 2)", solution(1, 5, 2));
