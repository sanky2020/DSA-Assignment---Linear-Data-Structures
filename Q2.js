//Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.

let reverseArr = arr => {
newArr = []
for(let i = arr.length-1 ; i>=0; i--){
newArr.push(arr[i])
}
return newArr
}
console.log(reverseArr([1,2,3,4,5]));
