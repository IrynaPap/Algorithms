function merge() {
    var arr1 = [5, 6, 7, 9, 12];
    var arr2 = [1, 2, 3, 8, 10, 11, 15, 21, 27];
    var arr3 = [];
    var n = left.length + right.length;

    for (i = 0; i < count; i++) {
        if ((left.length > 0 && right.length == 0) || left[0] < right[0]) {
            result.push(left[0]);
            left.shift();
        }

        else {
            result.push(right[0]);
            right.shift();
        }
    }
    return result;
}
console.log(merge());