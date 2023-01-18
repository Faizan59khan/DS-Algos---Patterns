//Given Sorted Array find no of pair which has a sum = k

//1)BruteForce aproach:
let arr = [1, 2, 3, 5, 5, 5, 6, 9, 10];

// function pairsBF(arr,k){
// let pairs=[];
// for(let i=0;i<arr.length;i++){
//    for(let j=i+1;j<arr.length;j++){
//       if(arr[i] + arr[j] === k){
//           pairs.push([arr[i],arr[j]])
//       }
//    }
// }
// return pairs;
// }
// console.log(pairsBF(arr,11))

//2)Two Pointers Aproach
function pairsTP(arr, k) {
  let start = 0;
  let end = arr.length - 1;
  let pairs = [];
  while (start <= end) {
    if (arr[start] + arr[end] > k) {
      end--;
    } else if (arr[start] + arr[end] < k) {
      start++;
    } else {                          // [5,5,5,6,6] for these kind of case we have to be little logical
      //equal to k
      let tempStart = start+1;
      let tempEnd = end-1;
      let startCount = 1;
      let endCount = 1;
      while (arr[start] === arr[tempStart]) {
        tempStart++;
        startCount++;
      }
      while (arr[end] === arr[tempEnd]) {
        tempEnd--;
        endCount++;
      }

      if (startCount || endCount) {
        for (let i = 0; i < startCount * endCount; i++) {
          pairs.push([arr[start], arr[end]]);
        }
      }
      else{
        pairs.push([arr[start],arr[end]]);
       }
         start++;
         end--;
    }
  }
  return pairs;
}

console.log(pairsTP(arr, 11));
