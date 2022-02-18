feather.replace()

// Actual code

const toggleButton = document.getElementById("nav-toggle");
const navLinks = document.querySelector(".nav-menu");

toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("nav-menu--visible");
});