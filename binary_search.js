function binary_search(A, value) {
    var i = 0;
    var n = A.length;
    var middle;
    if (A.length <= 1) {
        if (A[0] == value) {
            return 0;
        } else {
            return -1;
        }
    } else {
        while (i < A.length) {
            middle = Math.floor(i + (n - i) / 2)
            if (value == A[middle]) {
                return middle;
            } else {
                if (n-i == 1) {
                    return -1;
                } else {
                    if (value > A[middle]) {
                        i = middle;
                        console.log(i)
                    } else {
                        n = middle;
                        console.log(n)
                    }
                }
            }
        }
    }
}
console.log(binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 12));