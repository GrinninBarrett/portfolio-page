const hamburgerIcon = document.querySelector("#hamburger-icon");
const navLinksEl = document.querySelector("#nav-links");
const navMenuUl = document.querySelector("#nav-menu");

const recentProjectsContainer = document.querySelector("#recent-project-cards-container");

const emailLink = document.querySelector("#email");

let menuOpen = false;


// Ensure normal nav links display if going from narrow window to wider window on desktop
window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
        navLinksEl.style.display = "block";
    } else {
        navLinksEl.style.display = "none";
    }
})


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


// Copy email address to clipboard when clicked
emailLink.addEventListener("click", (event) => {
    event.preventDefault();

    const el = document.createElement("textarea");
    el.setAttribute("readonly", "");
    el.value = event.target.textContent;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);

    let tooltip = document.querySelector("#email");
    tooltip.setAttribute("data-tooltip", "Email copied to clipboard!");
    setTimeout(() => {
        tooltip.setAttribute("data-tooltip", "Click to copy email address to clipboard");
    }, 5000);

})


// function addCardsToMain() {
//     for (let i = 0; i < 4, i++) {
//         let nextCard = document.createElement("div");

//     }
// }

// addCardsToMain();