let name = "Ali";
let id = "22";
let department = "IT";
let gpa = 3.6;

let output = "";
output += "Name: " + name + "<br>";
output += "ID: " + id + "<br>";
output += "Department: " + department + "<br>";
output += "GPA: " + gpa + "<br>";

if (gpa >= 3.5) {
    output += "Excellent Student";
} else if (gpa >= 2.5) {
    output += "Good Student";
} else {
    output += "Needs Improvement";
}

document.getElementById("output").innerHTML = output;