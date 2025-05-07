document.getElementById("btn").addEventListener("click", function() {
    this.textContent = "Clicked!";
    this.style.backgroundColor = "lightblue";
});

document.getElementById("hover-div").addEventListener("mouseover", function() {
    this.style.backgroundColor = "yellow";
});

document.addEventListener("keydown", function(event) {
    console.log(`Key pressed: ${event.key}`);
});

document.getElementById("secret-btn").addEventListener("dblclick", function() {
    alert("Secret double-click action triggered!");
});

document.getElementById("toggle-btn").addEventListener("click", function() {
    this.textContent = this.textContent === "Click me!" ? "You clicked!" : "Click me!";
    this.style.backgroundColor = this.style.backgroundColor === "blue" ? "red" : "blue";
});

let images = ["img1.jpg", "img2.jpg", "img3.jpg"];
let index = 0;

document.getElementById("next-btn").addEventListener("click", function() {
    index = (index + 1) % images.length;
    document.getElementById("gallery-img").src = images[index];
});

document.getElementById("form").addEventListener("submit", function(event) {
    let name = document.getElementById("name").value;
    if (name.trim() === "") {
        alert("Name is required!");
        event.preventDefault();
    }
});

document.getElementById("email").addEventListener("blur", function() {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.value)) {
        alert("Invalid email format!");
    }
});

document.getElementById("password").addEventListener("input", function() {
    if (this.value.length < 8) {
        document.getElementById("password-warning").textContent = "Password must be at least 8 characters!";
    } else {
        document.getElementById("password-warning").textContent = "";
    }
});

