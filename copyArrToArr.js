function frankenSplice(arr1, arr2, n) {
    let b = arr2.slice(0);
    b.splice(n,0,...arr1);
    return b;
  }
   
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

// let a = [1,2,3];
// let b = [4,5,6];
// b.splice(1,3,...a,...b.slice(1));
// console.log(b.splice(1,3,...a,...b.slice(1)));