const fs = require("fs");
const path = require("path");

fs.promises.readdir(path.join(__dirname, "./secret-folder"), { withFileTypes: true })
    .then((files) => {
        files.forEach((file) => {
            if (!file.isDirectory()) {
                fs.stat(path.join(__dirname, "./secret-folder", file.name), (err, stats) => {
                    if (err) throw err;
                    console.log(`${file.name.split(".")[0]} - ${file.name.split(".")[1]} - ${Number(stats.size / 1024).toFixed(3)}kb`)
                });
            }
        });
    })
    .catch((err) => console.log(err));