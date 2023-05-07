const fs = require("fs");
const path = require("path");

function styleInit() {
    fs.promises.readdir(path.join(__dirname, "./styles"), { withFileTypes: true })
        .then((files) => {
            const writeStream = fs.createWriteStream(path.join(__dirname, './project-dist/bundle.css'));

            files.forEach((file) => {
                if (!file.isDirectory()) {
                    if (file.name.split(".")[1] === "css") {
                        const readStream = fs.createReadStream(path.join(__dirname, "./styles", file.name), "utf-8");
                        readStream.addListener("data", (data) => {
                            writeStream.write(data);
                        })
                    }
                }
            })
        })
        .catch((err) => {
            console.log(err);
        })
}

styleInit();