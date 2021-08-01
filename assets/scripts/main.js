const hamburgerIcon = document.querySelector("#hamburger-icon");
const navLinksEl = document.querySelector("#nav-links");
const navMenuUl = document.querySelector("#nav-menu");


let menuOpen = false;


hamburgerIcon.addEventListener("click", () => {
    hamburgerIcon.classList.toggle("is-active");
    if (!menuOpen) {
        navLinksEl.style.display = "block";
        navLinksEl.style.right = "0";
        hamburgerIcon.setAttribute("aria-expanded", "true");
        menuOpen = true;
    } else {
        navLinksEl.style.display = "none";
        navLinksEl.style.right = "-1000";
        hamburgerIcon.setAttribute("aria-expanded", "false");
        menuOpen = false;
    }
})


// Ensure normal nav links display if going from narrow window to wider window on desktop
window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
        navLinksEl.style.display = "block";
    } else {
        navLinksEl.style.display = "none";
    }
})