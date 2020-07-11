function titleCase(str) {
    // convert the string to an array
    let strArr = str.split(" ");
    let newArray = [];
    for(let i=0;i<strArr.length;i++){
      // get the second character up to the last
      let a = strArr[i].substr(1).toLowerCase(); 
      //get the first character and capitalize it
      let b = strArr[i].substring(0,1).toUpperCase();
      let c = b+a;
      newArray.push(c);
    }
    str = newArray.join(" ");
    return str;
}
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
  