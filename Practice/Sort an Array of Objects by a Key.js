let students = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 23 }
];
students.sort((a, b) => a.age - b.age);
console.log(students);
// Output: [{ name: "Bob", age: 22 }, { name: "Charlie", age: 23 }, { name: "Alice", age: 25 }]
