const hamburgerIcon = document.querySelector("#hamburger-icon");
const navLinksEl = document.querySelector("#nav-links");
const navMenuUl = document.querySelector("#nav-menu");


let menuOpen = false;


hamburgerIcon.addEventListener("click", () => {
    hamburgerIcon.classList.toggle("is-active");
    if (!menuOpen) {
        navLinksEl.style.display = "block";
        menuOpen = true;
    } else {
        navLinksEl.style.display = "none";
        menuOpen = false;
    }
})