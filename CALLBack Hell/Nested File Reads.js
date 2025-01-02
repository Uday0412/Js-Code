const fs = require("fs");

fs.readFile("file1.txt", "utf-8", (err, data1) => {
    if (err) return console.error(err);
    console.log(data1);

    fs.readFile("file2.txt", "utf-8", (err, data2) => {
        if (err) return console.error(err);
        console.log(data2);

        fs.readFile("file3.txt", "utf-8", (err, data3) => {
            if (err) return console.error(err);
            console.log(data3);
        });
    });
});
