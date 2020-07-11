function repeatStringNumTimes(str, num) {
let strArr = "";
  if (num < 0){
    return "";
  }else{
      for(let i=0;i<num;i++){
        strArr+=str;
      }
  }
  return strArr;
}

console.log(repeatStringNumTimes("abc", 3));
