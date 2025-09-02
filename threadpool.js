process.env.UV_THREADPOOL_SIZE = 5;

const fs = require("fs");

const crypto = require("crypto");

crypto.pbkdf2("password", "salt", 50000, 50, "sha512", (err, key) => {
  console.log("first crypto done");
});

crypto.pbkdf2("password", "salt", 50000, 50, "sha512", (err, key) => {
  console.log("second crypto done");
});

crypto.pbkdf2("password", "salt", 50000, 50, "sha512", (err, key) => {
  console.log("third crypto done");
});

crypto.pbkdf2("password", "salt", 50000, 50, "sha512", (err, key) => {
  console.log("fourth crypto done");
});

crypto.pbkdf2("password", "salt", 50000, 50, "sha512", (err, key) => {
  console.log("fifth crypto done");
});

crypto.pbkdf2("password", "salt", 50000, 50, "sha512", (err, key) => {
  console.log("six crypto done");
});

crypto.pbkdf2("password", "salt", 50000, 50, "sha512", (err, key) => {
  console.log("seven crypto done");
});

fs.readFile("./note.txt", "utf-8", (err, data) => {
  console.log(data);
});
