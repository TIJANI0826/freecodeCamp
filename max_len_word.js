function findLongestWordLength(str) {
    let a = [];
    let string = str.split(" ");
    for(i=0;i<string.length;i++){
        a.push(string[i].length);
    }
    return Math.max(...a);
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));