function apiCall1(callback) {
    setTimeout(() => {
        console.log("API 1 completed");
        callback();
    }, 1000);
}

function apiCall2(callback) {
    setTimeout(() => {
        console.log("API 2 completed");
        callback();
    }, 1000);
}

apiCall1(() => {
    apiCall2(() => {
        console.log("All APIs completed");
    });
});
