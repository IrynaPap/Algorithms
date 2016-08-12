function duplicateDelete(A) {
    var n = A.length;
    var B = [];
    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - 1; j++) {
            if (A[i] == A[j + 1]) {
                A.splice(i, 1);
                console.log(A);
            } console.log(A[i] + " dnjhjt " + A[j + 1])
        }
    } return A;
}
console.log(duplicateDelete([3, 2, 1, 3, 43, 3, 3, 7, 3, 3]))

