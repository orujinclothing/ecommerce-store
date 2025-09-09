// ===== Navigation Toggle =====
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".nav-menu");
const toggleIcon = toggle.querySelector("i");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    toggleIcon.classList.toggle("fa-bars");
    toggleIcon.classList.toggle("fa-times");
});

// ===== Account Page (Login / Register) =====
const logForm = document.getElementById("loginForm");
const regForm = document.getElementById("registerForm");
const remLog = document.getElementById("removeLog");
const remReg = document.getElementById("removeReg");

function login() {
    logForm.style.display = "flex";
    regForm.style.display = "none";
    remLog.style.display = "none";
    remReg.style.display = "block";
}

function register() {
    logForm.style.display = "none";
    regForm.style.display = "flex";
    remLog.style.display = "block";
    remReg.style.display = "none";
}

// ===== Product Image Preview =====
const prodImg = document.getElementById("prodImg");
const smallImgs = document.querySelectorAll(".small-img");

smallImgs.forEach(img => {
    img.addEventListener("click", () => {
        prodImg.src = img.src;
    });
});
