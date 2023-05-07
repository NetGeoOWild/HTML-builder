const fs = require("fs");
const path = require("path");
const process = require("process");
const stream = fs.createReadStream(path.join(__dirname, "text.txt"), "utf-8");

stream.addListener("data", (data) => {
    process.stdout.write(data);
});