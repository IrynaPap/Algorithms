function sortInsersion(A) {
    var n = A.length;
    for (i = 0; i < n - 1; i++) {
        while (A[i] > A[i + 1]) {
            var t = A[i + 1];
            A[i + 1] = A[i];
            A[i] = t;
            i--;
        }
    } return A;
}
console.log(sortInsersion([1, 2, 3, 12, 8, 1, 45, 5, 15, 11, 9]));