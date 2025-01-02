function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched");
        callback();
    }, 1000);
}

fetchData(() => {
    setTimeout(() => {
        console.log("Processing data...");
        setTimeout(() => {
            console.log("Data processed");
        }, 1000);
    }, 1000);
});
