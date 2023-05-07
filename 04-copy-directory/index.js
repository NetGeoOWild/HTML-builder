const fs = require("fs");
const path = require("path");

function copyFolder() {
    fs.mkdir(path.join(__dirname, "./files-copy"), { recursive: true }, (error) => {
        if (error) throw error;
        fs.promises.readdir(path.join(__dirname, "./files-copy"))
            .then((files) => {
                files.forEach((file) => {
                    fs.unlink(path.join(__dirname, "./files-copy", file), (error) => {
                        if (error) throw error;
                    });
                })
            })
            .catch((error) => {
                console.log(error);
            })

        fs.promises.readdir(path.join(__dirname, "./files"), { withFileTypes: true })
            .then((files) => {
                files.forEach((file) => {
                    if (!file.isDirectory()) {
                        fs.promises.copyFile(path.join(__dirname, "./files", file.name), path.join(__dirname, "./files-copy", file.name))
                    }
                })
            })
            .catch((error) => {
                console.log(error);
            })
    })
}

copyFolder();