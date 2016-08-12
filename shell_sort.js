function sortShell(A) {
  var n = A.length;
  var d = Math.floor(n / 2);
  while (d !== 1) {
    for (i = 0; i + d < n; i++) {
      if (A[i] > A[i + d]) {
        console.log(d, i, i + d)
        t = A[i];
        A[i] = A[i + d];
        A[i + d] = t;
      }
    } d = Math.floor(d / 2);

  }
  for (i = 0; i < n - 1; i++) {
    while (A[i] > A[i + 1]) {
      var t = A[i + 1];
      A[i + 1] = A[i];
      A[i] = t;
      i--;
    }
  } return (A);
}
console.log(sortShell([1, 2, 3, 12, 8, 1, 45, 5, 15, 11, 9]));