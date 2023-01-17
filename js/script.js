// togle calss active
const navbarNav = document.querySelector(".navbar-nav");

// ketika humbege menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di liar sidebar unuk menghilangkan nav
const humberger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!humberger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
