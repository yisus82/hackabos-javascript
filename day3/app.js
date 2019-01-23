let n = prompt('Enter a number:', 10);

for (let i = 2; i < n; i++) {
  for (let j = 2; j <= i; j++) {
    if (!(i % j)) {
      if (j == i) {
        console.log(i);
      } else {
        break;
      }
    }
  }
}
