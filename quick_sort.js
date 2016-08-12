function QS(A) {
  var n = A.length;
  var p = Math.floor(n / 2);
  var right = [];
  var left = [];
  if (n <= 1) {
    return (A);
  }
  else {
    for (var i = 0; i < n; i++) {
      if(i==p){
        continue;
      }
      if (A[i] > A[p]) {
        right.push(A[i]);
        console.log("right " + right+" p "+A[p]);
      } else {
        left.push(A[i]);
        console.log("left   " + left+" p "+A[p]);
      }
    } 
    return QS(left).concat(A[p]).concat(QS(right));
  }
}

console.log(QS([4, 5, 3, 8, 12, 7, 9, 2]));