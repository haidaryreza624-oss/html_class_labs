let email = prompt("Enter Email");
if (email.includes("@") && email.includes(".com")) {
    document.write("Valid Email");
} else {
    document.write("Invalid Email");
}