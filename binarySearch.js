
//array should be in sorted form
function BinarySearch(arr,key){
 let left=0;
 let right=arr.length-1;
 let mid=0;
 while(left <= right){
  mid= Math.floor((left + right)/2);
   if(key === arr[mid]){
    return mid;
   }
   else if(key < arr[mid]){
     right=mid-1;
   }
   else{
    left= mid +1;
   }
 }
 return "Not Found";
}
var arr=[-2,3,4,6,7,8,9,11,44,45]
//console.log(BinarySearch(arr,44))

//recursive one
let left=0;
let right=arr.length-1;

function binarySearch(left,right,arr,key){
  let mid=0;
  while(left <= right){
    mid = Math.floor((left + right)/2);
    if(key === arr[mid]){
      return mid;
    }
    else if(key > arr[mid]){
      return binarySearch(mid+1,right,arr,key)
    }
    else{
      return binarySearch(left,mid -1,arr,key)
    }
  }
  return -1;
}

console.log(binarySearch(left,right,arr,-2))