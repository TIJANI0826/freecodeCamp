function reverseString(str) {
    let a = str.split("").reverse().join("");
    return a;
  }
  
console.log(reverseString("hello"));