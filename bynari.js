function bynari(A, value) {
    if (A.length == 1) {
        if (A[0] == value) {
            return 0;
        } else {
            return -1;
        }
    } else {
        var middle = Math.floor((A.length) / 2);
        console.log(A + " for" + "  " + middle + " " + A[middle])
        if (A[middle] == value) {
            return middle;
        } else {
            if (value < A[middle]) {
                return bynari(A.slice(0, middle), value);
            } else {
                var result = bynari(A.slice(middle), value);
                console.log(result);
                if (result === -1) { return result; }
                else {
                    return middle + result;
                }
            }
        }
    }
}
console.log(bynari([1, 2, 3, 4, 5, 6, 8, 9], 12))