const last = (arr: Array<number>) => {
  return arr[arr.length - 1];
};

console.log(last([1, 2, 3, 4]));

type Prepend = <T>(arr: T[], item: T) => void;
const prepend: Prepend = (arr, item) => {
  return arr.unshift(item);
};

console.log(prepend([1, 2, 3, 4], 5));
