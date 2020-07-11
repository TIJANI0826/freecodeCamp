function confirmEnding(str, target) {
    let a = str.split(" "); // convert string into Array;
    let lastWordOfString = a[a.length-1] // get the last element of the array
    if(str.charAt(str.length-1) === target[target.length-1] && lastWordOfString.includes(target) == true){
        return true;
    }
     else{
         return false;
        }
  }
console.log(confirmEnding("Abstraction", "action"));

