function truncateString(str, num) {
    let res;
    if(str.length > num){
        res =str.substr(0,num).trim()+"..."
        // if (res.split(" ").length < num){
        //     res= res+"..."
        // }
    }else{
        res = str;
    }
    return res;
  }
console.log(truncateString("Absolutely Longer", 2));