function sheik(A) {
    var n = A.length;
    var left = 0;
    var right = n - 1;

    while (left < right) {
        for (var i = right; i >= left; i--) {
            if (A[i] < A[i - 1]) {
                var temp = A[i];
                A[i] = A[i - 1];
                A[i - 1] = temp;
            }
            //    console.log(A[i], right)
        } right--;

        for (var i = left; i <= right; i++) {
            if (A[i] > A[i + 1]) {
                var temp = A[i];
                A[i] = A[i + 1];
                A[i + 1] = temp;
            }
            //  console.log(A[i], left + "left")
        } left++;
    }
    return A;
}
console.log(sheik(A = [1, 2, 3, 12, 8, 1, 45, 5, 11, 9]))
