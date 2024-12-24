function findLongestCountryName(countries) {
    let longestCountry = "";
    for (let i = 0; i < countries.length; i++) {
        if (countries[i].length > longestCountry.length) {
            longestCountry = countries[i];
        }
    }
    return longestCountry;
}

// Example usage
const countryList = ["Australia", "Germany", "United States of America"];
const longestName = findLongestCountryName(countryList);
console.log(longestName); // Output: United States of America
