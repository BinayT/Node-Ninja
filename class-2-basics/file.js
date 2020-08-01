const fs = require("fs");
///////////////////////////////////////////////readFiles
/* fs.readFile("./file.txt", (err, data) => {
  if (err) console.log(err);
  console.log(data.toString());
});

console.log(
  "This loads first because fs is async function, hence won't block the code."
); */
///////////////////////////////////////////////writeFiles

/* fs.writeFile("./file.txt", "I'm learning fs in node", () =>
  console.log("File rewritten")
); */

///////////////////////////////////////////////making directories
/* if (!fs.existsSync("./assests")) {
  fs.mkdir("./assests", (err) => {
    if (err) console.log(err.message);
    console.log("assests mkdir made");
  });
} else {
  fs.rmdir("./assests", (err) => {
    if (err) console.log(err);
    console.log("assests rmdir done");
  });
} */

///////////////////////////////////////////////removing files
if (fs.existsSync("./removefile.txt")) {
  fs.unlink("./removefile.txt", (err) => {
    if (err) console.log(err);
    console.log("file deleted");
  });
}
