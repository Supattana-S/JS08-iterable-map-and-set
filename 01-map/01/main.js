const map = new Map();
map.set("name", "Thomas");
map.set("age", 31);

console.log(map);

map.set("name", "Dan");
console.log(map);

console.log(map.has("birthday"));

console.log(map.size);

map.clear();

console.log(map);
