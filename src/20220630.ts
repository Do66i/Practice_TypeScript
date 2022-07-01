const last = (arr: Array<number>) => {
  return arr[arr.length - 1];
};

console.log(last([1, 2, 3, 4]));

// type Prepend = <T>(arr: T[], item: T) => void;
// const prepend: Prepend = (arr, item) => {
//   return arr.unshift(item);
// };

// console.log(prepend([1, 2, 3, 4], 5));
// 이러면 5만 출력되니까.... 틀린답임 ㅠㅠ.... 문제좀 똑바로 읽어라

type Prepend = <T>(items: T[], item: T) => T[];

const prepend: Prepend = (items, item) => [item, ...items];

const items = [1, 2, 3, 4, 5];

const newItems = prepend(items, 0);

console.log(newItems);
