function fetchData() {
    return new Promise(resolve => setTimeout(() => {
        console.log("Data fetched");
        resolve();
    }, 1000));
}

fetchData()
    .then(() => new Promise(resolve => setTimeout(() => {
        console.log("Processing data...");
        resolve();
    }, 1000)))
    .then(() => setTimeout(() => console.log("Data processed"), 1000));
