//Display a greeting based on the current time

const greeting = document.getElementById("greeting");
const hour = new Date().getHours(); //Get the current hour

//Change greeting based on time
if (hour < 12) {
    greeting.textContent = "Good morning!";
} else if (hour < 18) {
    greeting.textContent = "Good afternoon!";
} else {
    greeting.textContent = "Good evening!";
}