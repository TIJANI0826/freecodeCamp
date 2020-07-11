function chunkArrayInGroups(arr, size) {
    let a = [];
    let len =Math.ceil(arr.length/size)
    for(i=0;i<len;i++){
        
        a.push(arr.splice(0,size));
    }

    // var newArray = arr.filter(function(element) {
    //     if(element !== false) return element;
    // });

    return a;
  }
  
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
