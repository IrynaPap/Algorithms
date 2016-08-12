
function sumTo(n) {
  if (n != 1) {
    return n + sumTo(n - 1);
  } else {
    return 1;
  }
}
console.log(sumTo(5));