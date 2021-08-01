const hamburgerIcon = document.querySelector("#hamburger-icon");
const navLinksEl = document.querySelector("#nav-links");
const navMenuUl = document.querySelector("#nav-menu");

const seeAllProjects = document.querySelector("#see-all-projects");

const recentProjectsContainer = document.querySelector("#recent-project-cards-container");
const allProjectsCardsContainer = document.querySelector("#all-projects-cards-container");

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


// Use data from projects.js to populate info to recent projects cards on page load
function addCardsToMain() {

    for (let i = 0; i < 6; i++) {

        // Create all relevant elements and set the appropriate attributes
        let nextCard = document.createElement("article");
        nextCard.setAttribute("class", "project-card");

        let nextImage = document.createElement("img");
        nextImage.setAttribute("class", "project-image");
        nextImage.setAttribute("src", allProjects[i].image);

        let nextInfoDiv = document.createElement("div");
        nextInfoDiv.setAttribute("class", "project-info flex-item flex-column");

        let nextGitHubButton = document.createElement("a");
        nextGitHubButton.setAttribute("class", "link light-text project-link");
        nextGitHubButton.setAttribute("href", allProjects[i].gitHub);
        nextGitHubButton.setAttribute("target", "_blank");
        nextGitHubButton.textContent = "View on Github";

        let nextLiveURL = document.createElement("a");
        nextLiveURL.setAttribute("class", "link light-text project-link");
        nextLiveURL.setAttribute("href", allProjects[i].liveURL);
        nextLiveURL.setAttribute("target", "_blank");
        nextLiveURL.textContent = "See Live Site";

        // Append each new element to its parent
        recentProjectsContainer.appendChild(nextCard);
        nextCard.appendChild(nextImage);
        nextCard.appendChild(nextInfoDiv);
        nextInfoDiv.appendChild(nextGitHubButton);
        nextInfoDiv.appendChild(nextLiveURL);
    }
}

addCardsToMain();


// function addAllProjects() {
//     for (let i = 0; i < allProjects.length; i++) {

//         // Create all relevant elements and set the appropriate attributes
//         let nextCard = document.createElement("article");
//         nextCard.setAttribute("class", "project-card");

//         let nextImage = document.createElement("img");
//         nextImage.setAttribute("class", "project-image");
//         nextImage.setAttribute("src", allProjects[i].image);

//         let nextInfoDiv = document.createElement("div");
//         nextInfoDiv.setAttribute("class", "project-info flex-item flex-column");

//         let nextGitHubButton = document.createElement("a");
//         nextGitHubButton.setAttribute("class", "link light-text project-link");
//         nextGitHubButton.setAttribute("href", allProjects[i].gitHub);
//         nextGitHubButton.setAttribute("target", "_blank");
//         nextGitHubButton.textContent = "View on Github";

//         let nextLiveURL = document.createElement("a");
//         nextLiveURL.setAttribute("class", "link light-text project-link");
//         nextLiveURL.setAttribute("href", allProjects[i].liveURL);
//         nextLiveURL.setAttribute("target", "_blank");
//         nextLiveURL.textContent = "See Live Site";

//         // Append each new element to its parent
//         recentProjectsContainer.appendChild(nextCard);
//         nextCard.appendChild(nextImage);
//         nextCard.appendChild(nextInfoDiv);
//         nextInfoDiv.appendChild(nextGitHubButton);
//         nextInfoDiv.appendChild(nextLiveURL);
//     }
// }