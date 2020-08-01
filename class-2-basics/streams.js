const fs = require("fs");

const readStream = fs.createReadStream("./file.txt");
const writeStream = fs.createWriteStream("./writeStream.txt");

readStream.on("data", (chunk) => {
  console.log("---- NEW CHUNK ----");
  console.log(chunk);
  writeStream.write("\nNEW CHUNK\n");
  writeStream.write(chunk);
});
