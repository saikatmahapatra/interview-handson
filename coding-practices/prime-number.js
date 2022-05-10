function isPrimmeNumber(N) {
  let isPrime = true;
  if(N === 1) {
    isPrime = false;
  } else {
    for(var i = 2; i < N ; i++) {
      if(N % i === 0) {
         isPrime = false;
      }
    }
  }
  return isPrime;
}
