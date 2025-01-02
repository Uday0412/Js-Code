const fs = require("fs").promises;

(async function readFiles() {
    try {
        const data1 = await fs.readFile("file1.txt", "utf-8");
        console.log(data1);
        const data2 = await fs.readFile("file2.txt", "utf-8");
        console.log(data2);
        const data3 = await fs.readFile("file3.txt", "utf-8");
        console.log(data3);
    } catch (err) {
        console.error(err);
    }
})();
