global.setTimeout(() => {
  console.log("This got printed after 2000 ms");
}, 2000);

const int = setInterval(() => {
  return console.log("this comes after hi");
}, 2000);

console.log(__dirname);
console.log(__filename);
