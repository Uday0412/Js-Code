function apiCall() {
    return new Promise(resolve => setTimeout(() => resolve("API completed"), 1000));
}

apiCall().then(result => {
    console.log(result);
    return apiCall();
}).then(result => {
    console.log(result);
    console.log("All APIs completed");
});
