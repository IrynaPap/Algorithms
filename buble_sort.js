function buble(A) {
    var n = A.length;
    for (var j = 0; j < n - 1; j++) {
        for (var i = 0; i < n - j - 1; i++) {
            if (A[i] > A[i + 1]) {
                var temp = A[i];
                A[i] = A[i + 1];
                A[i + 1] = temp;
            }
            console.log(i + " + " + A[i] + " + " + j);
        }
    }
    return A;
}
console.log(buble(A = [1, 2, 3, 12, 8, 1, 45, 5, 11, 9]))
