let name = prompt("Enter Name");
let gpa = parseFloat(prompt("Enter GPA"));
let age = parseInt(prompt("Enter Age"));
let result = "";
if (gpa >= 3.5 && age <= 25) {
    result = "Eligible for Scholarship";
} else if (gpa >= 3.0) {
    result = "Partially Eligible";
} else {
    result = "Not Eligible";
}
document.write("Name: " + name + "<br>");
document.write("GPA: " + gpa + "<br>");
document.write("Age: " + age + "<br>");
document.write("Result: " + result);