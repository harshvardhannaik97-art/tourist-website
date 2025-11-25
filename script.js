// Toggle mobile menu
function toggleMenu() {
    const menu = document.querySelector(".nav-links");
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}

// Scroll to places section
function scrollToPlaces() {
    document.querySelector("#places").scrollIntoView({
        behavior: "smooth"
    });
}

// Handle form submission
function submitForm(event) {
    event.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;

    document.querySelector("#form-status").innerText =
        `Thank you ${name}! We will contact you at ${email}.`;

    return false;
}
