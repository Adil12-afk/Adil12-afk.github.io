document.getElementById("regForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

        function markError(element, condition) {
        if (condition) {
            element.classList.add("error");
            isValid = false;
        } else {
            element.classList.remove("error");
        }
    }

    
    let fullname = document.getElementById("fullname");
    let rollno = document.getElementById("rollno");
    let email = document.getElementById("email");
    let semester = document.getElementById("semester");
    let gender = document.getElementById("gender");
    let message = document.getElementById("message");
    let courseGroup = document.querySelectorAll("input[name='courses']:checked");

    
    markError(fullname, fullname.value.trim() === "");
    markError(rollno, rollno.value.trim() === "");
    markError(email, email.value.trim() === "" || !email.value.includes("@"));
    markError(semester, semester.value === "");
    markError(gender, gender.value === "");
    markError(message, message.value.trim() === "");
    
    
    let courseContainer = document.getElementById("courseGroup");
    markError(courseContainer, courseGroup.length === 0);

    if (isValid) {
        alert("Form submitted successfully!");
        this.reset();
    }
});
