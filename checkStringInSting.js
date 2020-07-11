function mutation(arr) {
    let strOne = arr[0].toLowerCase().split("");
    let strTwo = arr[1].toLowerCase().split("");
    let newArray = [];
    for(let i =0;i<strTwo.length;i++){
        for(let j=0;j<strOne.length;j++){
            if(strTwo[i] == strOne[j]){
                let a = false;
                for(let h=0;h<newArray.length;h++){
                    
                    if(newArray[i] == strOne[j]){
                        a =true;
                    }
                }
                if(a == false){
                    newArray.push(strOne[j]);
                }
                
            }
        }
    }
    const result = (newArray,strTwo) => {
        let arrLength;
        if ((arrLength = newArray.length) != strTwo.length) return false;
        for (let i = 0; i < arrLength; i++) if (strTwo[i] !== newArray[i]) return false;
        return true;
    }
    return result(newArray,strTwo);
  }
  console.log(mutation(["Noel", "Ole"]))