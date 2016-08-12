function binary(A, value) {
    if (A.length == 1) {
        if (A[0] == value) {
            return 0;
        } else {
            return -1;
        }
    } else {
        var n = A.length;
        var i = 0;
        var to = n;
        var from1 = 0;
        while (i < n) {
            var middle = Math.floor(from1 + (to - from1) / 2);
            if (A[middle] == value) {
                return middle;
            } else {
                if ((to-from1) == 1) {
                    return -1;
                } else {
                    if (value < A[middle]) {
                        to = middle;
                        console.log(from1, to, " levo");
                    } else {
                        from1 = middle;
                        console.log(from1, to, " pravo");
                    }
                }
            }
        }
    }
}

console.log(binary([1, 2, 3, 4, 5, 6, 8, 9], 24))