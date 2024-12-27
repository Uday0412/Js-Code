function isValidEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
console.log(isValidEmail("test@example.com")); // true
console.log(isValidEmail("invalid-email")); // false
