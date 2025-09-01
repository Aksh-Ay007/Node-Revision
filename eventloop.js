const fs = require("fs");
let a = 10;
let b = 20;


/*
setImmediate(() => console.log("SetImmediate: Executed outside I/O events."));

fs.readFile("./note.txt", "utf-8", (err, data) => {
  process.nextTick(() => console.log("NextTick: Executed after I/O callback (readFile)."));

  setTimeout(() => {
    console.log("setTimeout: Executed after I/O callback (readFile).");
  }, 0);

  setImmediate(() => {
    console.log("SetImmediate: Executed after I/O callback (readFile).");
  });

  console.log("File read successfully.");
});

Promise.resolve("Promise resolved.").then(console.log);

setTimeout(() => console.log("setTimeout: Executed after main script."), 0);

process.nextTick(() => console.log("NextTick: Executed after main script."));

function sum(a, b) {
  let res = a + b;
  return res;
}

process.nextTick(() => console.log("NextTick: Scheduled with delay (should execute soon)."), 6000);

const result = sum(a, b);

console.log("Sum result:",result )

*/


//thread poll


