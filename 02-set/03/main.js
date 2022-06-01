const values = [1, 4, 8, 2, 1, 3, 3, 8];

const unique = (arr) => {
  const set = new Set(arr);
  resultArr = Array.from(set);
  return resultArr;
};

console.log(unique(values)); // [1, 4, 8, 2, 3]
