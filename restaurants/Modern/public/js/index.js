const button = document.querySelector(".navbar-btn");
const navBarList = document.querySelector(".navbar-list");

button.addEventListener("click", () => {
  navBarList.classList.toggle("navbar-list__active")
})