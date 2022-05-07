const menuButton = document.querySelector("#mobile-menu");

menuButton.addEventListener("click", (e) => {
  e.preventDefault();
  const menu = document.querySelector(".mobile-links");

  menu.classList.toggle("show-Links");
});

const mobileLink = document.querySelector("#mobile-link");
