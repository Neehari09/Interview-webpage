function saveRole() {
    var role = document.getElementById("role").value;
    localStorage.setItem("role", role);
    window.location.href = "technical.html";
}

function calculateTech() {
    let score = 0;

    if (document.querySelector('input[name="q1"]:checked')?.value === "def") score++;
    if (document.querySelector('input[name="q2"]:checked')?.value === "correct") score++;
    if (document.querySelector('input[name="q3"]:checked')?.value === "correct") score++;
    if (document.querySelector('input[name="q4"]:checked')?.value === "correct") score++;
    if (document.querySelector('input[name="q5"]:checked')?.value === "correct") score++;

    localStorage.setItem("techScore", score);
    window.location.href = "aptitude.html";
}

function calculateApt() {
    let score = 0;

    if (document.querySelector('input[name="a1"]:checked')?.value === "correct") score++;
    if (document.querySelector('input[name="a2"]:checked')?.value === "correct") score++;
    if (document.querySelector('input[name="a3"]:checked')?.value === "correct") score++;
    if (document.querySelector('input[name="a4"]:checked')?.value === "correct") score++;
    if (document.querySelector('input[name="a5"]:checked')?.value === "correct") score++;

    localStorage.setItem("aptScore", score);
    window.location.href = "result.html";
}

function displayResult() {
    let role = localStorage.getItem("role");
    let tech = parseInt(localStorage.getItem("techScore")) || 0;
    let apt = parseInt(localStorage.getItem("aptScore")) || 0;
    let total = tech + apt;

    document.getElementById("roleDisplay").innerHTML = "Selected Role: " + role;
    document.getElementById("techScore").innerHTML = "Technical Score: " + tech + "/5";
    document.getElementById("aptScore").innerHTML = "Aptitude Score: " + apt + "/5";

    let message = "";

    if (total >= 8) {
        message = "Excellent Performance!";
    } else if (total >= 5) {
        message = "Good Job! Keep Improving.";
    } else {
        message = "Needs Improvement. Practice More.";
    }

    document.getElementById("finalMessage").innerHTML = message;
}