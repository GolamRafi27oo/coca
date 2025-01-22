const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};

mobileNav.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevent click from propagating to document
  toggleNav();
});

document.addEventListener("click", (event) => {
  if (!navbar.contains(event.target) && !mobileNav.contains(event.target)) {
    navbar.classList.remove("active");
    mobileNav.classList.remove("hamburger-active");
  }
});
