function getIndexToIns(arr, num) {
    arr = arr.sort((a, b) => a - b);
    if(arr.length== 0){
        return 0;
    }else if(num > arr[arr.length-1]){
        return arr.length;
    }else if(num == arr[arr.length-1]){
        return arr.length - 1;
    }
    else if(num < arr[arr.length-1]) {
        for(let i = 0; i < arr.length; i++){
            if(arr[i] >= num){
            return i;
        }
    }
    
  }
}
  console.log(getIndexToIns([], 1));