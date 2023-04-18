const max = (a = 10, b = 30) => (a > b ? a : b);

console.log(max());
console.log((() => "foobar")());
