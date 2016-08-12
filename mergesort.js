var A = [6, 4, 3, 5, 6, 9, 7, 10, 11, 45, 1, 8];

function sort(left, right) {
    var result = [];
    var count = left.length + right.length;

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

function mergeSort(A) {
    
    if (A.length == 1) {
        return A;
    }
    n = A.length;
   var middle = Math.floor(n / 2),
    left = A.slice(0, middle),
    right = A.slice(middle);
    return sort(mergeSort(left), mergeSort(right));
    }

console.log(mergeSort(A))

