function factorialRecurs(n) {
  if (n !== 1) {
    return n * (factorialRecurs(n - 1));
  } else return 1;
}

console.log(factorialRecurs(5))