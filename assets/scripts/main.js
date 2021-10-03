const hamburgerIcon = document.querySelector("#hamburger-icon");
const navLinksEl = document.querySelector("#nav-links");
const navMenuUl = document.querySelector("#nav-menu");
const contactLink = document.querySelector("#contact-link");

const seeAllProjects = document.querySelector("#see-all-projects");

const recentProjectsContainer = document.querySelector("#recent-project-cards-container");
const allProjectsContainer = document.querySelector("#all-projects-cards-container");

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

// Toggle hamburger icon state and show/hide mobile nav bar
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

// Ensure clicking "contact" link closes mobile nav bar
contactLink.addEventListener("click", () => {
    hamburgerIcon.classList.remove("is-active");
    if (menuOpen) {
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

    for (let i = 0; i < 3; i++) {

        // Create all relevant elements and set the appropriate attributes
        let nextCard = document.createElement("article");
        nextCard.setAttribute("class", "project-card");

        let nextPictureEl = document.createElement("picture");

        let primarySource = document.createElement("source");
        primarySource.setAttribute("srcset", allProjects[i].primarySource);
        primarySource.setAttribute("type", "image/webp");

        let nextImage = document.createElement("img");
        nextImage.setAttribute("class", "project-image");
        nextImage.setAttribute("height", "350px");
        nextImage.setAttribute("width", "350px");
        nextImage.setAttribute("src", allProjects[i].image);
        nextImage.setAttribute("alt", allProjects[i].alt);

        let nextInfoDiv = document.createElement("div");
        nextInfoDiv.setAttribute("class", "project-info flex-item flex-column");

        let nextTitle = document.createElement("h3");
        nextTitle.setAttribute("class", "base-text");
        nextTitle.style.margin = 0;
        nextTitle.textContent = allProjects[i].name;

        let nextTech = document.createElement("p");
        nextTech.setAttribute("class", "green-text");
        nextTech.style.textAlign = "center";
        nextTech.style.margin = 0;
        nextTech.textContent = allProjects[i].technologies;

        let nextGitHubButton = document.createElement("a");
        nextGitHubButton.setAttribute("class", "link light-text project-link");
        nextGitHubButton.setAttribute("href", allProjects[i].gitHub);
        nextGitHubButton.setAttribute("target", "_blank");
        nextGitHubButton.setAttribute("rel", "noreferrer");
        nextGitHubButton.textContent = "View on Github";

        let nextLiveURL = document.createElement("a");
        nextLiveURL.setAttribute("class", "link light-text project-link");
        nextLiveURL.setAttribute("href", allProjects[i].liveURL);
        nextLiveURL.setAttribute("target", "_blank");
        nextLiveURL.setAttribute("rel", "noreferrer");
        nextLiveURL.textContent = "See Live Site";

        // Append each new element to its parent
        recentProjectsContainer.appendChild(nextCard);
        nextCard.appendChild(nextPictureEl);
        nextPictureEl.appendChild(primarySource);
        nextPictureEl.appendChild(nextImage);
        nextCard.appendChild(nextInfoDiv);
        nextInfoDiv.appendChild(nextTitle);
        nextInfoDiv.appendChild(nextTech);
        nextInfoDiv.appendChild(nextGitHubButton);
        nextInfoDiv.appendChild(nextLiveURL);
    }
}

function checkPage() {
    let body = document.querySelector("body");
    let bodyClass = body.className;

    if (bodyClass === "home") {
        addCardsToMain();
    } else if (bodyClass === "projects") {
        addAllProjects();
    }
}

checkPage();


function addAllProjects() {
    for (let i = 0; i < allProjects.length; i++) {

        // Create all relevant elements and set the appropriate attributes
        let nextCard = document.createElement("article");
        nextCard.setAttribute("class", "project-card");

        let nextPictureEl = document.createElement("picture");

        let primarySource = document.createElement("source");
        primarySource.setAttribute("srcset", allProjects[i].primarySource);
        primarySource.setAttribute("type", "image/webp");

        let nextImage = document.createElement("img");
        nextImage.setAttribute("class", "project-image");
        nextImage.setAttribute("src", allProjects[i].image);
        nextImage.setAttribute("height", "350px");
        nextImage.setAttribute("width", "350px");
        nextImage.setAttribute("alt", allProjects[i].alt);

        let nextInfoDiv = document.createElement("div");
        nextInfoDiv.setAttribute("class", "project-info flex-item flex-column");

        let nextTitle = document.createElement("h3");
        nextTitle.setAttribute("class", "base-text");
        nextTitle.style.margin = 0;
        nextTitle.textContent = allProjects[i].name;

        let nextTech = document.createElement("p");
        nextTech.setAttribute("class", "green-text");
        nextTech.style.textAlign = "center";
        nextTech.style.margin = 0;
        nextTech.textContent = allProjects[i].technologies;

        let nextGitHubButton = document.createElement("a");
        nextGitHubButton.setAttribute("class", "link light-text project-link");
        nextGitHubButton.setAttribute("href", allProjects[i].gitHub);
        nextGitHubButton.setAttribute("target", "_blank");
        nextGitHubButton.setAttribute("rel", "noreferrer");
        nextGitHubButton.textContent = "View on Github";

        let nextLiveURL = document.createElement("a");
        nextLiveURL.setAttribute("class", "link light-text project-link");
        nextLiveURL.setAttribute("href", allProjects[i].liveURL);
        nextLiveURL.setAttribute("target", "_blank");
        nextLiveURL.setAttribute("rel", "noreferrer");
        nextLiveURL.textContent = "See Live Site";

        // Append each new element to its parent
        allProjectsContainer.appendChild(nextCard);
        nextCard.appendChild(nextPictureEl);
        nextPictureEl.appendChild(primarySource);
        nextPictureEl.appendChild(nextImage);        
        nextCard.appendChild(nextInfoDiv);
        nextInfoDiv.appendChild(nextTitle);
        nextInfoDiv.appendChild(nextTech);
        nextInfoDiv.appendChild(nextGitHubButton);
        nextInfoDiv.appendChild(nextLiveURL);
    }
}