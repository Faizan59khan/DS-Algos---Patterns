//Idea: Substring, Subset, Contigous part 

// let arr=[100,-800,400,400,500,-600,700]

// //BruteForce Aproach: (We can improve this code )

// function bFSumOfArr(arr,sizeOfSubArr){
//   let sum=[];
// for(let i=0;i< (arr.length - sizeOfSubArr);i++){
//   let subArr=[]
//   for(let j=i;j<i+sizeOfSubArr;j++){
//     subArr.push(arr[j])
//   }
//   sum.push(subArr)
// }
// return sum;
// }

// console.log(bFSumOfArr(arr,3))

function sWSumOfSubArr(arr,subArrSize){
  let i=0; 
  let j=subArrSize;
  let sum=0;
  while(j<arr.length){
    let curr_sum=0;
    for(let k=i;k<j;k++){
     curr_sum+=arr[k];
    }
    sum= Math.max(sum,curr_sum)
    i++;
    j++;
  }
  return sum;
}


// console.log(sWSumOfSubArr(arr,2))

//Algorithm
//=> Maintain Two Pointers (One From left and one from right)
//=> Move the Sliding Window (means pointers) base on some condition.
//=> Achieve the result in more optimized way as no repeatation of work.


//Given an integer array nums, find a subarray that has the largest product, and return the product.
// let nums=[-2,1,-3,4,-1,2,1,-5,4]
// function maxProduct(nums) {
//   let globalMaxProduct = nums[0];
//   let localMaxProduct = nums[0];
//   let localMinProduct = nums[0];

//   for (let i = 1; i < nums.length; i++) {
// 	// We keep a temp variable because we want to keep track of the localMaxProduct before any calculations.
//     let prevLocalMaxProduct = localMaxProduct;   //this is for only first iteration
	
//     localMaxProduct = Math.max(nums[i], nums[i] * localMaxProduct, nums[i] * localMinProduct);
//     localMinProduct = Math.min(nums[i], nums[i] * prevLocalMaxProduct, nums[i] * localMinProduct);
	
//     globalMaxProduct = Math.max(localMaxProduct, globalMaxProduct);
//   }

//   return globalMaxProduct;
// }

// console.log(maxProduct(nums))

// var maxSubArray = function(nums) {
//     let globalMaxSum=nums[0];
//     let localMaxSum=nums[0];
//     let localMinSum=nums[0];
    
//     for(let i=1;i<nums.length;i++){
//       let prevLocalSum=localMaxSum;
//       localMaxSum=Math.max(nums[i],nums[i]+localMaxSum,nums[i]+localMinSum)
//       localMinSum=Math.min(nums[i],nums[i]+prevLocalSum,nums[i]+localMinSum)

//       globalMaxSum=Math.max(localMaxSum,globalMaxSum)
//     }
//     return globalMaxSum;
// };

// console.log(maxSubArray(nums))




