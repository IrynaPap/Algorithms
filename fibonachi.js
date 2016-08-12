function fibonachi(value) {
    var arr = [];
    var sum = 0;
    for (i = 0; i < value; i++) {
        arr.push(i + (i + 1));
        sum = (arr[i] + sum);
    } 
    console.log(sum);
    return arr;
}
console.log(fibonachi(15));
