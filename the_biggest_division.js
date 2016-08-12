
function thebiggestdiv(num1, num2) {
    var div;
    if (num1 > num2) {
        if (num1 % num2 == 0) {
            return num2;
        } else {
            div = num2;
        }
    } else {
        if (num2 % num1 == 0) {
            return num1;
        } else {
            div = num1;
        }
    }
    while (num1 % div !== 0 || num2 % div !== 0) {
        div--;
    }

    return div;


}
console.log(thebiggestdiv(24, 16));