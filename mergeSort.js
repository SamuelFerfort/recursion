function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);

  const leftHalf = arr.slice(0, mid);
  const rightHalf = arr.slice(mid);

  return modernMerge(mergeSort(leftHalf), mergeSort(rightHalf));
}

function merge(a, b) {
  let c = [];
  let i = 0,
    j = 0,
    k = 0;
  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      c[k++] = a[i++];
    } else {
      c[k++] = b[j++];
    }
  }
  for (; i < a.length; i++) c[k++] = a[i];
  for (; j < b.length; j++) c[k++] = b[j];
  return c;
}

function modernMerge(left, right) {
  let merged = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      merged.push(left.shift());
    } else {
      merged.push(right.shift());
    }
  }

  return [...merged, ...left, ...right];
}
const array = [3, 7, 2, 9, 1, 5];
const sortedArray = mergeSort(array);
console.log(sortedArray);
