function fibs(n) {
  let arr = [0, 1];
  if (n == 1) return [0];
  if (n == 2) return arr;
  while (arr.length < n) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }
  return arr;
}

function fibRecursive(n) {
  if (n < 2) return n;
  return fibRecursive(n - 1) + fibRecursive(n - 2);
}

const fibsRec = (num, sequence = [0, 1]) => {
  if (sequence.length >= num) {
    return sequence.slice(0, num);
  }

  const newNumber = sequence.at(-1) + sequence.at(-2);
  sequence.push(newNumber);
  return fibsRec(num, sequence);
};
console.log(fibs(8));
console.log(fibsRec(8));
