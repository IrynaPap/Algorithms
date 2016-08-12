function sortchoice(A) {
    var n = A.length;
    A;
    for (i = 0; i < n - 1; i++) {
        var min = i;
        for (j = i + 1; j < n; j++) {
            if (A[min] > A[j]) {
                var t = A[min];
                A[min] = A[j];
                A[j] = t;
            }
        }

    } return A;
}
console.log(sortchoice([1, 2, 3, 12, 8, 1, 45, 5, 11, 9]));