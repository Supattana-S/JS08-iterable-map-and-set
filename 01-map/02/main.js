const arr = [
  ["email", "codeisfun@example.com"],
  ["isActive", true],
];

const map = new Map();
map.set(arr[0][0], arr[0][1]);
map.set(arr[1][0], arr[1][1]);

console.log(map);
