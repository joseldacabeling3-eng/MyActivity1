let studentList = [
    { id: "2026-001", name: "Joselda Cabeling" },
    { id: "2026-002", name: "Glendel Asotes" },
    { id: "2026-003", name: "John Cruz" }
];

console.log("STUDENT ID LIST");

studentList.forEach(function(student) {
    console.log("ID: " + student.id);
    console.log("Name: " + student.name);
    console.log("-------------------");
});