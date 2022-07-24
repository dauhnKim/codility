const arr = [3, 8, 9, 7, 6];
const times = 3;

function solution(A, K) {
  let newArr = [...A];
  const to = 0;

  // array.splice(startIndex, [deleteCount], [itemsToAdd..]);
  for (let i = 0; i < K; i++) {
    let item = newArr.splice(newArr.length - 1, 1)[0]; // 배열의 마지막 요소
    newArr.splice(to, 0, item); // 마지막 요소를 인데스 0에 배치
  }

  return newArr;
}

console.log("solution(arr, times)", solution(arr, times));
