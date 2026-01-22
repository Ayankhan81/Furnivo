function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

window.addEventListener("click", function(e) {
    if (!e.target.classList.contains("fa-bars")) {
        document.getElementById("menu").style.display = "none";
    }
});

function openLogin(){
    window.location.href="loginpage.html"
}

function registerMsg(){
    alert("Registered Successfully")
    window.location.href="index.html";
}
function loginMsg(){
    alert("Log-in Successfully")
    window.location.href="index.html";

}
function submit(){
    window.location.href="index.html";
    
}