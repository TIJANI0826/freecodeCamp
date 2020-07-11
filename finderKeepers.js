/*
    findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
    findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.
 */

function findElement(arr, func) {
    let num = undefined;
    for(let i=0;i<arr.length;i++){
        if(func(arr[i])==true){
            num = arr[i];
            return num;
        }
    }
    return num;
  }

console.log(findElement([1, 4, 3, 2], num => num % 2 === 0));
  