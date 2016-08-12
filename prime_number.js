
function primeNumber(value) {
    var divisor = 2;
    while (value < divisor)
        if (value % divisor == 0) {
            divisor++;
            return false;
        }
        else {
            return true;
        }
}
console.log(11)