const fs = require("fs");
const path = require("path");
const process = require("process");
const stream = fs.createWriteStream(path.join(__dirname, './text.txt'));

stream.addListener("error", (error) => console.log(error));
process.stdout.write("Привет! Напиши что-нибудь!\n");
process.stdin.addListener("data", (data) => {
    if (data.toString().trim() === "exit") {
        process.exit(process.stdout.write("Пока, еще увидимся :)"));
    } else {
        stream.write(data);
    }
});
process.addListener("SIGINT", () => process.exit(process.stdout.write("Пока, еще увидимся :)")));