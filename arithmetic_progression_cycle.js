function sumTo(n) {
  var sum = 1;
  for(i=1; i<n+1; i++){
    sum=sum+i;
    console.log(sum+"  "+i);
  }
    return sum;
}
console.log(sumTo(5))
