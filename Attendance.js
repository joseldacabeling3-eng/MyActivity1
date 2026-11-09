// ATTENDANCE SYSTEM

let student = {
    name: "Joselda Cabeling",
    course: "BS Computer Science",
    attendance: "Present"
};

function displayAttendance() {
    console.log("STUDENT ATTENDANCE");
    console.log("----------------------");
    console.log("Name: " + student.name);
    console.log("Course: " + student.course);
    console.log("Status: " + student.attendance);
}

displayAttendance();