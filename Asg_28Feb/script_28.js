// Array of student objects with their marks
const students = [
    {
        name: "Alice",
        marks: [85, 90, 78, 92]
    },
    {
        name: "Bob",
        marks: [75, 88, 82, 79]
    },
    {
        name: "Charlie",
        marks: [92, 89, 95, 88]
    },
    {
        name: "Diana",
        marks: [80, 85, 87, 91]
    }
];

// Function to calculate average marks for a student
function calculateAverage(marks) {
    const sum = marks.reduce((acc, mark) => acc + mark, 0);
    return (sum / marks.length).toFixed(2);
}

// Calculate and display averages
students.forEach(student => {
    const average = calculateAverage(student.marks);
    console.log(`${student.name}: ${average}`);
});

// Find student with highest average
function getTopStudent() {
    let topStudent = students[0];
    let highestAverage = calculateAverage(topStudent.marks);

    students.forEach(student => {
        const average = parseFloat(calculateAverage(student.marks));
        if (average > highestAverage) {
            highestAverage = average;
            topStudent = student;
        }
    });

    return { name: topStudent.name, average: highestAverage };
}

console.log("\nTop Student:", getTopStudent());